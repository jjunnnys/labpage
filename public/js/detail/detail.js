const detailValid = document.querySelector('.js-valid');

console.log(detailValid);

const ADMIN = 'admin';

const DetailValid = () => {
  const admin = localStorage.getItem(ADMIN);
  if (admin === 'true') {
    detailValid.style.display = 'inline-block';
  }
};

DetailValid();

document.addEventListener('DOMContentLoaded', () => {
  const trigger = new ScrollTrigger({
    offset: {
      x: 0,
      y: 10,
    },
    toggle: {
      visible: 'showSection',
      hidden: 'hideSection',
    },
  });
});

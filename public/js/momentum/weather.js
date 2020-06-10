"use stript";
// const weather = document.querySelector(".js-weather");

// const API_KEY = "baab523c1e8aaf69df1d7f5b1182a687";
// const COORDS = "coords";

// const getWeather = (lat, lon) => {
//   fetch(
//     `https:////api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//   )
//     .then((res) => {
//       // fetch 데이터가 완전히 들어 온 다음에 호출
//       return res.json();
//     })
//     .then((json) => {
//       // json 데이터가 다 들어오면 호출
//       //   console.log(json);
//       const temp = json.main.temp;
//       const palce = json.name;
//       weather.innerText = `${temp}도 ${palce}`;
//     });
// };

// const saveCoords = (coordsObj) => {
//   localStorage.setItem(COORDS, JSON.stringify(coordsObj));
// };

// // 좌표를 가져오기 성공 했을 때
// const handleGeoSucces = (position) => {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   // 객체의 value와 key가 같을 땐 하나만 적을 수 있음
//   const coordsObj = {
//     latitude,
//     longitude,
//   };
//   saveCoords(coordsObj);
//   getWeather(latitude, longitude);
// };

// // 좌표를 가져오기 실패 했을 때
// const handleGeoError = () => {
//   console.log("현재 위치 정보를 읽을 수 없습니다.");
// };

// // 좌표를 호출하는 함수
// const askForCoords = () => {
//   // 현재 위치를 알려줌 -> navigator API 쓴다.  그 외도 많음
//   navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); // 2개의 requirement
// };

// const loadCoords = () => {
//   const loadedCoords = localStorage.getItem(COORDS);
//   if (loadedCoords === null) {
//     askForCoords();
//   } else {
//     // 이미 좌표값을 가지고 있을 경우 날씨 가져오기
//     const parsedCoords = JSON.parse(loadedCoords);
//     getWeather(parsedCoords.latitude, parsedCoords.longitude);
//   }
// };

// const Weather = () => {
//   loadCoords();
// };

// Weather();

// script.js

// 지역 데이터
const regions = [
    { name: "서울", value: 19.0, top: "19%", left: "24%" },
    { name: "세종", value: 19.2, top: "38%", left: "28%" },
    { name: "대전", value: 23.2, top: "43%", left: "31%" },
    { name: "광주", value: 23.7, top: "63%", left: "22%" },
    { name: "인천", value: 24.6, top: "21%", left: "16%" },
    { name: "강원", value: 26.0, top: "15%", left: "47%" },
    { name: "충북", value: 28.6, top: "35%", left: "36%" },
    { name: "충남", value: 29.4, top: "40%", left: "20%" },
    { name: "전북", value: 20.9, top: "55%", left: "26%" },
    { name: "전남", value: 23.3, top: "69%", left: "24%" },
    { name: "경북", value: 25.8, top: "42%", left: "60%" },
    { name: "경남", value: 24.1, top: "60%", left: "48%" },
    { name: "대구", value: 24.4, top: "50%", left: "53.5%" },
    { name: "울산", value: 28.3, top: "57%", left: "66%" },
    { name: "부산", value: 23.5, top: "64%", left: "64%" },
    { name: "제주", value: 27.3, top: "94%", left: "16%" },
    { name: "경기", value: 21.3, top: "25%", left: "30%" },
  ];
  
  // 지도에 데이터 표시
  const mapContainer = document.getElementById("map-container");
  regions.forEach(region => {
    const marker = document.createElement("div");
    marker.className = "marker";
    marker.style.top = region.top;
    marker.style.left = region.left;
    marker.innerHTML = `${region.name}<br>${region.value}`;
    mapContainer.appendChild(marker);
  });
  
  
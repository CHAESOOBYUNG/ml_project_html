// script.js

// 통합된 JSON 데이터 로드 함수
async function fetchRegionData() {
  try {
    const response = await fetch('korea/regions.json');
    if (!response.ok) {
      throw new Error('데이터를 가져오는 데 실패했습니다.');
    }
    return await response.json();
  } catch (error) {
    console.error('에러:', error.message);
    return {};
  }
}

// 기존 마커 삭제 함수
function clearMarkers() {
  const markers = document.querySelectorAll('.marker');
  markers.forEach(marker => marker.remove());
}

// 마커 클릭 이벤트 처리
function handleMarkerClick(region) {
  alert(`지역: ${region.name}\n값: ${region.value}\n추가 정보: ${region.info || '정보 없음'}`);
}

// 마커 추가 함수
function addMarkers(regions) {
  const mapContainer = document.getElementById('map-container');
  clearMarkers(); // 기존 마커 삭제

  regions.forEach(region => {
    const marker = document.createElement('div');
    marker.className = 'marker';
    marker.style.top = region.top;
    marker.style.left = region.left;
    marker.innerHTML = `${region.name}<br>${region.value}`;
    marker.setAttribute('data-info', region.info || '추가 정보 없음'); // 추가 정보 설정
    mapContainer.appendChild(marker);

    marker.addEventListener('click', () => handleMarkerClick(region));
  });
}

// 초기화 함수
async function initMap() {
  const yearSelect = document.getElementById('year-select');
  const data = await fetchRegionData(); // 전체 데이터 로드
  const regions = data[yearSelect.value]; // 기본 연도 데이터 로드
  addMarkers(regions);

  // 연도 변경 이벤트 처리
  yearSelect.addEventListener('change', () => {
    const selectedRegions = data[yearSelect.value];
    addMarkers(selectedRegions);
  });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', initMap);
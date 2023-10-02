// const API_KEY = '';

const initMap = () => {
  // fetch(
  //   `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap&libraries=&v=weekly`
  // );
  //36.101672,139.571866
  const arakawa = { lat: 36.101672, lng: 139.571866 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: arakawa,
  });
  const marker = new google.maps.Marker({
    position: arakawa,
    map: map,
  });
};

window.onload = () => {
  initMap();
};

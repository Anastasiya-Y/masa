const mapContainer = document.querySelector('.contacts__map');

// Options for the marker
const iconOptions = {
  iconUrl: 'img/svg/icon-pin.svg',
  iconSize: [70, 70],
};

// Creating a custom icon

const getIconOptions = () => {
  const customIcon = L.icon(iconOptions);
  const markerOptions = {
    title: 'masaLocation',
    clickable: false,
    draggable: false,
    icon: customIcon,
  };
  return markerOptions;
};

const createMap = () => {
  if (!mapContainer) {
    return;
  }

  const map = L.map(mapContainer, {scrollWheelZoom: false}).setView([55.0283865, 82.9276902], 17);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([55.0283865, 82.9276902], getIconOptions()).addTo(map);
};

export {createMap};

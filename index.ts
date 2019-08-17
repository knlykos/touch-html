var sidebar = document.getElementById('quadro');

sidebar.addEventListener(
  'touchstart',
  e => {
    console.log(e);
  },
  true
);

sidebar.addEventListener(
  'touchmove',
  e => {
    console.log(e);
  },
  true
);

sidebar.addEventListener(
  'touchend',
  e => {
    console.log(e);
  },
  true
);

sidebar.addEventListener(
  'touchcancel',
  e => {
    console.log(e);
  },
  true
);

import { tns } from 'tiny-slider/src/tiny-slider';

document.addEventListener('DOMContentLoaded', function () {
  const containerSelector = '.fls-container';
  if (!document.querySelector(containerSelector)) return;

  tns({
    autoHeight: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    container: containerSelector,
    gutter: 40,
    controlsContainer: '.fls-controls',
    nav: false,
    responsive: {
      '350': {
        items: 1,
      },
      '500': {
        items: 2,
      },
      '800': {
        items: 3,
      },
      '1200': {
        items: 4,
      },
    },
    slideBy: 'page',
  });
});

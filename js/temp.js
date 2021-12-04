$('.owl-service').owlCarousel({
  items: 3,
  loop: true,
  dots:false,
  autoplay: true,
  margin:20,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
});
$('.owl-carousel').owlCarousel({
  items: 4,
  loop: true,
  autoplay: true,
  margin:10,
  dots:false,
  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});

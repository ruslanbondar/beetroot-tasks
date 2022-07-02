$('#slick-container').slick({
  dots: true,
  arrows: true,
  // autoplay: true,
  // autoplaySpeed: 500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
      },
    },
  ],
});

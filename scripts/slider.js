$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true
  });

  $('.slider-header .left-arrow').on('click', function (e) {
    e.preventDefault();
    $('.slider2').slick('slickPrev');
  });
  $('.slider-header .right-arrow').on('click', function (e) {
    e.preventDefault();
    $('.slider2').slick('slickNext');
  });

  $('.slider2').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider3').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.slider4').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider5').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1
        }
      }
    ]

  });
  $('.slider5-header .left-arrow').on('click', function (e) {
    e.preventDefault();
    $('.slider5').slick('slickPrev');
  });
  $('.slider5-header .right-arrow').on('click', function (e) {
    e.preventDefault();
    $('.slider5').slick('slickNext');
  });


  //slider to photo
  $('.slider6').slick({
    slidesToShow: 3,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    dots: false
  })
});

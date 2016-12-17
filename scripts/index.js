$(document).ready(function () {
  // tabs on details page
  $("#tabs").tabs();

  // stars on details page
  var $stars = $('.information-details .star');
  $stars.on('click', function () {
    $(this).prevAll('.star').addClass('active');
    $(this).nextAll().removeClass('active');
    $(this).addClass('active');
  });

  //input
  var $plus = $('.plus-minus .plus');
  var $input = $('.input-wrapper input');
  $plus.on('click', function () {
    var $inputValue = +$input.val() || 0;
    console.log('значення інпута', $inputValue);
    $inputValue = $inputValue + 1;
    $input.val($inputValue);

  });

  var $minus = $('.plus-minus .minus');
  $minus.on('click', function () {
    var $inputValue = +$input.val() || 0;
    console.log('значення інпута', $inputValue);
    if ($inputValue > 1) {
      $inputValue = $inputValue - 1;
    }
    $input.val($inputValue);
  });


  //menu in phone
  var $menutoggle = $('.header .menu-toggle');
  var $headernav = $('.header .header-nav');
  $menutoggle.on('click', function () {
    if ($headernav.hasClass('active')) {
      $headernav.removeClass('active')
    }
    else {
      $headernav.addClass('active')
    }
  });


});

jQuery( function( $ ) {
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var menu = $(".main-nav");
    if (scroll >= 100) {
      menu.addClass("__active");
    }
    else {
      menu.removeClass('__active');
    }
  }); //missing );
  //hamburger button toggler
  // var menu = document.querySelector('#main-nav');
  // var _toggler = document.querySelector('#hambuger-button');
  // _toggler.addEventListener('click', function() {
  //   if(menu.classList.contains('show')) //menu is open
  //   {
  //     _toggler.classList.remove('is-active');
  //     menu.classList.remove('show');
  //   }
  //   else {
  //     _toggler.classList.add('is-active');
  //     menu.classList.add('show');
  //   }
  // });


});


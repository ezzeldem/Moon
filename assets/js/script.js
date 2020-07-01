$(document).ready(function(){


  $('.arrow-img').click(function(){
    $('html, body').animate({
      scrollTop: $(".about-section").offset().top
  }, 2000);
  })
  
  
  
  $('.our-taem-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    outhight:true,
    prevArrow:"<div class='circle-arrow devo-left'></div>",
    nextArrow:"<div class='circle-arrow devo-right'></div>",
    autoplaySpeed: 2000,
    autoplay:false,
    centerMode: true,
    centerPadding: '0px',
    dots: true, 
    arrows:true, 
       responsive: [
       
        {
          breakpoint: 997,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: true, 
            arrows:true, 
          }
        },
      ]
  })
  
    $('.slider-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      outhight:true,
      prevArrow:"<div class='circle-arrow devo-left'></div>",
      nextArrow:"<div class='circle-arrow devo-right'></div>",
      autoplaySpeed: 2000,
      autoplay:false,
      dots: true, 
      arrows:true, 
      
      //   {
      //     breakpoint: 772,
      //     settings: {
      //       slidesToShow: 1,
      //     }
      //   }
  
      // ]
    });
    
  
  //   $('.burger-b').click(function(){
  //     $('.burger-b').toggleClass('close-b');
  //     $('body').toggleClass('over-h');
  //     $('.nav-bar-u>ul').toggleClass('opne-nav');
  // })
  
  // $('.how-work-a').click(function(){
  //   $('html, body').animate({
  //     scrollTop: $(".how-work").offset().top
  // }, 1000);
  //   $('.burger-b').removeClass('close-b');
  //   $('body').removeClass('over-h');
  //   $('.nav-bar-u>ul').removeClass('opne-nav');
  // })
  
  
  
  // $('.features-a').click(function(){
  // $('html, body').animate({
  //   scrollTop: $(".features").offset().top
  // }, 1000);
  // $('.burger-b').removeClass('close-b');
  // $('body').removeClass('over-h');
  // $('.nav-bar-u>ul').removeClass('opne-nav');
  // })
  
  
  // $('.cases-a').click(function(){
  //   $('html, body').animate({
  //     scrollTop: $(".for").offset().top
  //   }, 1000);
  //   $('.burger-b').removeClass('close-b');
  //   $('body').removeClass('over-h');
  //   $('.nav-bar-u>ul').removeClass('opne-nav');
  //   })
    
  
    $('.ABOUT').click(function(){
      $('html, body').animate({
        scrollTop: $(".about-section").offset().top
      }, 1000);
      $('.burger-b').removeClass('close-b');
      $('.nav-bar').removeClass('open-menu-p');
      $('body').removeClass('body-over');
      })
  
  
      $('.COMPANIES').click(function(){
        $('html, body').animate({
          scrollTop: $(".compan-section").offset().top
        }, 1000);
        $('.burger-b').removeClass('close-b');
        $('.nav-bar').removeClass('open-menu-p');
        $('body').removeClass('body-over');
        })
  
        
  
        $('.PRODUCTS').click(function(){
          $('html, body').animate({
            scrollTop: $(".dating-section").offset().top
          }, 1000);
          $('.burger-b').removeClass('close-b');
          $('.nav-bar').removeClass('open-menu-p');
          $('body').removeClass('body-over');
          })
  
  
          $('.CONTACT').click(function(){
            $('html, body').animate({
              scrollTop: $(".subs").offset().top
            }, 1000);
            $('.burger-b').removeClass('close-b');
            $('.nav-bar').removeClass('open-menu-p');
            $('body').removeClass('body-over');
            })
        
  
  
  
  $('.burger-b').click(function(){
    $(this).toggleClass('close-b');
    $('body').toggleClass('body-over');
    $('.nav-bar').toggleClass('open-menu-p');
  })
  
  AOS.init();
  });
  
  
  
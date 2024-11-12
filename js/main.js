$('.banner-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: -1,
    speed: 2300,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $(document).ready(function () {
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        // Remove 'active' class from all buttons
        $(".filter-button").removeClass("active");

        if (value == "all") {
            // $('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //  $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //  $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }

        // Add 'active' class to the clicked button
        $(this).addClass("active");
    });
});


    jQuery(document).scroll(function() {

      var documentTop = jQuery(document).scrollTop();
      //box top is 891
      if (documentTop > 50) {
          //change the value of the css at this point
          jQuery(".navbar").addClass("fixed-top");
      }
      else        
      {
          jQuery(".navbar").removeClass("fixed-top");
      }
    
    });
    $(document).ready(function(){
      $(".navbar-toggler").click(function(){
      //   alert($(".navbar-collapse").hasClass("show"));
      if($(".navbar-collapse").hasClass("show")){
          $(".navbar").removeClass("darkBg");
      }else{
          $(".navbar").addClass("darkBg");
      }
      });
    });


    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
          "slideShow",
          "thumbs",
          "zoom",
          "fullScreen",
          "share",
          "close"
        ],
        loop: false,
        protect: true
      });
      

      $(document).ready(function() {
    var base_url = $("#base_url").val();

    if (
        window.location.href == base_url + '/lp-book1/contact-us.php' ||
        window.location.href == base_url + '/terms-conditions.php' ||
        window.location.href == base_url + '/404.php'
    ) {
        $(".navbar").css("background-color", "black");
    }
}); 


$(document).ready(function(){

    // portfolio 1
    $('.portfolio-slider-v1').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.portfolio-slider-v11').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        trl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // portfolio 2
    $('.portfolio-slider-v2').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        trl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.portfolio-slider-v22').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // portfolio 3
    $('.portfolio-slider-v3').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        trl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.portfolio-slider-v33').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // portfolio 4
    $('.portfolio-slider-v4').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        trl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.portfolio-slider-v44').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // portfolio 5
    $('.portfolio-slider-v5').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        trl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.portfolio-slider-v55').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // portfolio 6
    $('.portfolio-slider-v6').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        trl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.portfolio-slider-v66').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});

$(function () {
$(".da__open-tab-btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().parents(".da__program-tabs")
    .find(".da__program-info-container")
    .toggleClass("active")
    .slideToggle(400);
    $(this).parent().parents(".da__program-tab").toggleClass("active");
  });


  $(".da__program-inner-tab .control").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().parents(".da__program-info-tab")
    .find(".da__program-inner-tab-info")
    .slideToggle(400);
    $(this).parent().parents(".da__program-info-tab").toggleClass("active");
  });


  

  const sliderDa = $(".comment__slider-da").slick({
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
  /*   centerMode: false, */
    variableWidth: true,
    speed: 1000,
    infinity: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: true,
        },
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  });

  $(".prev-comment").on("click", (e) => {
    e.preventDefault();
    console.log("click");
    sliderDa.slick("slickPrev");
  });

  $(".next-comment").on("click", (e) => {
    e.preventDefault();
    console.log("click");
    sliderDa.slick("slickNext");
  });


  $(".read-more").on("click", function(e){
    e.preventDefault();
    $(this).parent().find("p").toggleClass("active");
    $(this).toggleClass("active");
  })

  $(".comment__slider-da .body p").each(function(){
    $(this).parent().find(".read-more").css("display","none");
    if($(this).outerHeight() > 290){
      $(this).height(290);
      $(this).parent().find(".read-more").css("display","inline-block");
    }
  })
  
  $(".footer-btn").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000); 
  })
    
  

});
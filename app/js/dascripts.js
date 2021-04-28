
$(function () {
$(".da__open-tab-btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().parents(".da__program-tabs")
    .find(".da__program-tab-info")
    .toggleClass("active")
    .slideToggle(400);
    $(this).parent().parents(".da__program-tab").toggleClass("active");
 /*    $(this).siblings("faq__block").removeClass("active");
    $(this).siblings("faq__block").find(".faq-text").slideUp(400); */
  });
});
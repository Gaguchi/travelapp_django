/*-----------------------------------------------------------------------------------

    Theme Name: Monity - CCTV & Security HTML Template
    Description: CCTV & Security HTML Template
    Author: Website Design Templates
    Version: 1.0
        
    ---------------------------------- */    

!function(s){"use strict";var i=s(window);s("#preloader").fadeOut("normall",function(){s(this).remove()}),i.on("scroll",function(){var e=i.scrollTop(),a=s(".navbar-brand img"),o=s(".navbar-brand.logodefault img"),t=s(".navbar-brand.dark img");e<=50?(s("header").removeClass("scrollHeader").addClass("fixedHeader"),a.attr("src","img/logos/logo-inner.png")):(s("header").removeClass("fixedHeader").addClass("scrollHeader"),a.attr("src","img/logos/logo.png")),o.attr("src","img/logos/logo.png"),t.attr("src","img/logos/logo.png")}),i.on("scroll",function(){500<s(this).scrollTop()?s(".scroll-to-top").fadeIn(400):s(".scroll-to-top").fadeOut(400)}),s(".scroll-to-top").on("click",function(e){e.preventDefault(),s("html, body").animate({scrollTop:0},600)}),s(".parallax,.bg-img").each(function(e){s(this).attr("data-background")&&s(this).css("background-image","url("+s(this).data("background")+")")}),s(".story-video").magnificPopup({delegate:".video",type:"iframe"}),s(".popup-social-video").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),s(".source-modal").magnificPopup({type:"inline",mainClass:"mfp-fade",removalDelay:160}),0!==s(".copy-clipboard").length&&(new ClipboardJS(".copy-clipboard"),s(".copy-clipboard").on("click",function(){var e=s(this);e.text();e.text("Copied"),setTimeout(function(){e.text("Copy")},2e3)})),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init(),s(document).ready(function(){s(".service-slider").owlCarousel({center:!1,items:2,loop:!0,dots:!1,nav:!0,navText:["<i class='ti-arrow-left text-primary'></i>","<i class='ti-arrow-right text-primary'></i>"],margin:30,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1500,responsive:{0:{items:1},768:{items:2},992:{items:3},1200:{items:4},1400:{items:4}}}),s(".testimonial-style1").owlCarousel({loop:!0,responsiveClass:!0,nav:!1,navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],dots:!1,margin:0,autoplay:!0,thumbs:!0,thumbsPrerendered:!0,autoplayTimeout:5e3,smartSpeed:800,responsive:{0:{items:1},600:{items:1},768:{items:1,nav:!0}}}),s(".testimonial-carousel1").owlCarousel({loop:!0,responsiveClass:!0,nav:!1,navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],dots:!1,margin:20,autoplay:!1,thumbs:!0,thumbsPrerendered:!0,autoplayTimeout:5e3,smartSpeed:800,responsive:{0:{items:1,nav:!1},600:{items:1,nav:!1},1e3:{items:1}}}),s(".testimonial-carousel2").owlCarousel({loop:!0,responsiveClass:!0,nav:!1,navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],dots:!1,margin:30,autoplay:!0,autoplayTimeout:5e3,smartSpeed:800,responsive:{0:{items:1},992:{items:2},1e3:{items:2}}}),s(".testimonial-carousel4").owlCarousel({loop:!0,responsiveClass:!0,nav:!1,dots:!1,margin:40,autoplay:!0,thumbs:!0,thumbsPrerendered:!0,autoplayTimeout:5e3,smartSpeed:1500,items:1}),s(".portfolio-carousel").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,center:!1,autoplayTimeout:5e3,smartSpeed:1500,nav:!1,dots:!1,margin:20,responsive:{0:{items:1},576:{items:2},992:{items:3},1200:{items:4}}}),s(".portfolio-carousel-02").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,center:!1,autoplayTimeout:5e3,smartSpeed:1500,nav:!0,navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],dots:!1,margin:30,responsive:{0:{items:1,nav:!1},768:{items:2},992:{items:3},1200:{items:3}}}),s(".client-style1").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,smartSpeed:1500,autoplayTimeout:12e3,responsiveClass:!0,autoplayHoverPause:!1,responsive:{0:{items:1,margin:30},481:{items:2,margin:15},576:{items:3,margin:30},992:{items:4,margin:40},1200:{items:5,margin:60},1600:{items:7,margin:80}}}),s(".team-carousel").owlCarousel({center:!1,items:2,loop:!0,dots:!1,margin:30,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1500,responsive:{0:{items:1},768:{items:2,center:!1},1200:{items:2,center:!1},1399:{items:2}}}),s(".slider-fade1").owlCarousel({items:1,loop:!0,dots:!1,margin:0,nav:!0,navText:["<i class='ti-arrow-left text-secondary'></i>","<i class='ti-arrow-right text-secondary'></i>"],autoplay:!0,smartSpeed:1500,mouseDrag:!1,animateIn:"fadeIn",animateOut:"fadeOut",responsive:{992:{nav:!1,dots:!0}}}),s(".slider-fade2").owlCarousel({items:1,loop:!0,dots:!0,margin:0,nav:!1,navText:["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],autoplay:!0,autoplayTimeout:6e3,smartSpeed:1500,animateIn:"fadeIn",animateOut:"fadeOut",responsive:{992:{nav:!0,dots:!1}}}),s(".owl-carousel").owlCarousel({items:1,loop:!0,dots:!1,margin:0,autoplay:!0,smartSpeed:500}),s(".slider-fade1").on("changed.owl.carousel",function(e){e=e.item.index-2;s("span").removeClass("animated fadeInUp"),s("h1").removeClass("animated fadeInUp"),s("p").removeClass("animated fadeInUp"),s("a").removeClass("animated fadeInUp"),s(".owl-item").not(".cloned").eq(e).find("span").addClass("animated fadeInUp"),s(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInUp"),s(".owl-item").not(".cloned").eq(e).find("p").addClass("animated fadeInUp"),s(".owl-item").not(".cloned").eq(e).find("a").addClass("animated fadeInUp")}),s(".countup").counterUp({delay:25,time:2e3}),s(".countdown").countdown({date:"01 Jul 2026 00:01:00",format:"on"}),s(".current-year").text((new Date).getFullYear())}),i.on("load",function(){s(".portfolio-gallery").lightGallery(),s(".portfolio-link").on("click",e=>{e.stopPropagation()})})}(jQuery);

$(".book").mouseenter(function(){
    $(this).parent(".book-wrap").addClass("rotate");
  });
  
$(".book").mouseleave(function(){
  $(this).parent(".book-wrap").removeClass("rotate");
});

$(".book").click(function(){
  $(this).parent(".book-wrap").addClass("flip");
});

$(".book-back").click(function(){
  $(this).parent(".book-wrap").removeClass("flip");
});

const container = document.querySelector('.index-service-card-container'); // replace '.container' with the selector of your cards' container
const cards = document.querySelectorAll('.index-service-card');
const servicesElement = document.querySelector('#services');

cards.forEach(card => {
  card.addEventListener('click', function() {
    if (this.classList.contains('col-12')) {
      this.classList.remove('col-12');
      this.classList.add('col-md-6', 'col-lg-4');

      // Show other cards
      cards.forEach(otherCard => {
        if (otherCard !== this) {
          otherCard.classList.remove('hidden');
        }
      });
    } else {
      this.classList.remove('col-md-6', 'col-lg-4');
      this.classList.add('col-12');

      // Hide other cards
      cards.forEach(otherCard => {
        if (otherCard !== this) {
          otherCard.classList.add('hidden');
        }
      });

      // Scroll to #services element
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
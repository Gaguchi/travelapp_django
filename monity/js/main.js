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


const cards = document.querySelectorAll('.index-service-card');
const servicesElement = document.querySelector('#services');

cards.forEach(card => {
  const cardBody = card.querySelector('.card-body');
  const originalContents = cardBody.innerHTML; // Save the original contents
  const serviceId = +card.dataset.service; // Convert to number

  const expandButtonListener = function() {
    console.log('Expand button clicked');
    if (card.classList.contains('col-12')) {
      card.classList.remove('col-12', 'flip');
      cardBody.classList.remove('flip-back'); // Remove the flip-back class
      card.classList.add('col-md-6', 'col-lg-4');
      card.classList.add('flip-back-card');
      cardBody.innerHTML = originalContents; // Restore the original contents

      // Re-attach the event listener to the expand button
      const newExpandButton = card.querySelector('.expand-button');
      if (newExpandButton) {
        newExpandButton.addEventListener('click', expandButtonListener);
      }

      // Show other cards
      cards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('hidden');
        }
      });
    } else {
      card.classList.remove('col-md-6', 'col-lg-4');
      card.classList.add('col-12', 'flip');
      card.classList.remove('flip-back-card');
      cardBody.classList.add('flip-back'); // Add the flip-back class

      // Change the contents based on the service ID
      switch (serviceId) {
        case 1:
          cardBody.innerHTML = `
          <span class="big-text">01</span>
          <div class="icon-box"><img src="img/icons/icon-10.png" alt="..."></div>
          <h3 class="position-relative pb-3 mb-4 h5"><a href="finger-print-access.php" class="text-white">Data Analytics</a></h3>
          <p class="mb-0 text-white">Ready to supercharge your decision-making process? Look no further! we specialize in delivering powerful data analytics, interactive dashboards, and Business Intelligence (BI) tools that elevate your business strategies.</p>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Explore Our Dynamic Use Cases:</a></h3>
          <ol>
              <li><strong>Data Analysis Excellence:</strong> Uncover actionable insights with our robust data analysis solutions. From market trends to customer behaviours, we turn raw data into strategic advantages.</li>
              <li><strong>Interactive Dashboards:</strong> Visualize success! Our interactive dashboards provide real-time, user-friendly snapshots of your key metrics. Make informed decisions at a glance.</li>
              <li><strong>Business Intelligence Tools:</strong> Drive efficiency with our BI tools. Transform complex data into accessible, understandable information, empowering your teams to perform at their best.</li>
              <li><strong>Custom Solutions for Your Industry:</strong> Tailored to perfection. We understand the unique challenges of your industry and craft bespoke solutions to meet your specific needs.</li>
          </ol>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Why Choose Mutabalis?</a></h3>
            <ul>
              <li>Expert Data Analysts: Our skilled team turns data into actionable insights, unlocking the full potential of your information.</li>
              <li>Intuitive Dashboards: Experience the power of visual data representation with our user-friendly, interactive dashboards.</li>
              <li>Comprehensive BI Tools: Transform your data into strategic assets with our cutting-edge Business Intelligence tools.</li>
            </ul>  
            <button class="back-button">Back</button>
        `;
          break;
        case 2:
          cardBody.innerHTML = `
          <span class="big-text">02</span>
          <div class="icon-box"><img src="img/icons/icon-12.png" alt="..."></div>
          <h3 class="position-relative pb-3 mb-4 h5"><a href="#" class="text-white">Statistical analysis</a></h3>
          <p class="mb-0 text-white">Ready to supercharge your decision-making process? Look no further! we specialize in delivering powerful data analytics, interactive dashboards, and Business Intelligence (BI) tools that elevate your business strategies.</p>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Explore Our Dynamic Use Cases:</a></h3>
          <ol>
              <li><strong>Data Analysis Excellence:</strong> Uncover actionable insights with our robust data analysis solutions. From market trends to customer behaviours, we turn raw data into strategic advantages.</li>
              <li><strong>Interactive Dashboards:</strong> Visualize success! Our interactive dashboards provide real-time, user-friendly snapshots of your key metrics. Make informed decisions at a glance.</li>
              <li><strong>Business Intelligence Tools:</strong> Drive efficiency with our BI tools. Transform complex data into accessible, understandable information, empowering your teams to perform at their best.</li>
              <li><strong>Custom Solutions for Your Industry:</strong> Tailored to perfection. We understand the unique challenges of your industry and craft bespoke solutions to meet your specific needs.</li>
          </ol>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Why Choose Mutabalis?</a></h3>
            <ul>
              <li>Expert Data Analysts: Our skilled team turns data into actionable insights, unlocking the full potential of your information.</li>
              <li>Intuitive Dashboards: Experience the power of visual data representation with our user-friendly, interactive dashboards.</li>
              <li>Comprehensive BI Tools: Transform your data into strategic assets with our cutting-edge Business Intelligence tools.</li>
            </ul>  
            <button class="back-button">Back</button>`;
          break;
        case 3:
          cardBody.innerHTML = `
          <span class="big-text">03</span>
          <div class="icon-box"><img src="img/icons/icon-11.png" alt="..."></div>
          <h3 class="position-relative pb-3 mb-4 h5"><a href="finger-print-access.php" class="text-white">Data Analytics</a></h3>
          <p class="mb-0 text-white">Ready to supercharge your decision-making process? Look no further! we specialize in delivering powerful data analytics, interactive dashboards, and Business Intelligence (BI) tools that elevate your business strategies.</p>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Explore Our Dynamic Use Cases:</a></h3>
          <ol>
              <li><strong>Data Analysis Excellence:</strong> Uncover actionable insights with our robust data analysis solutions. From market trends to customer behaviours, we turn raw data into strategic advantages.</li>
              <li><strong>Interactive Dashboards:</strong> Visualize success! Our interactive dashboards provide real-time, user-friendly snapshots of your key metrics. Make informed decisions at a glance.</li>
              <li><strong>Business Intelligence Tools:</strong> Drive efficiency with our BI tools. Transform complex data into accessible, understandable information, empowering your teams to perform at their best.</li>
              <li><strong>Custom Solutions for Your Industry:</strong> Tailored to perfection. We understand the unique challenges of your industry and craft bespoke solutions to meet your specific needs.</li>
          </ol>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Why Choose Mutabalis?</a></h3>
            <ul>
              <li>Expert Data Analysts: Our skilled team turns data into actionable insights, unlocking the full potential of your information.</li>
              <li>Intuitive Dashboards: Experience the power of visual data representation with our user-friendly, interactive dashboards.</li>
              <li>Comprehensive BI Tools: Transform your data into strategic assets with our cutting-edge Business Intelligence tools.</li>
            </ul>  
            <button class="back-button">Back</button>`;
          break;
        case 4:
          cardBody.innerHTML = `
          <span class="big-text">04</span>
          <div class="icon-box"><img src="img/icons/icon-13.png" alt="..."></div>
          <h3 class="position-relative pb-3 mb-4 h5"><a href="finger-print-access.php" class="text-white">Data Analytics</a></h3>
          <p class="mb-0 text-white">Ready to supercharge your decision-making process? Look no further! we specialize in delivering powerful data analytics, interactive dashboards, and Business Intelligence (BI) tools that elevate your business strategies.</p>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Explore Our Dynamic Use Cases:</a></h3>
          <ol>
              <li><strong>Data Analysis Excellence:</strong> Uncover actionable insights with our robust data analysis solutions. From market trends to customer behaviours, we turn raw data into strategic advantages.</li>
              <li><strong>Interactive Dashboards:</strong> Visualize success! Our interactive dashboards provide real-time, user-friendly snapshots of your key metrics. Make informed decisions at a glance.</li>
              <li><strong>Business Intelligence Tools:</strong> Drive efficiency with our BI tools. Transform complex data into accessible, understandable information, empowering your teams to perform at their best.</li>
              <li><strong>Custom Solutions for Your Industry:</strong> Tailored to perfection. We understand the unique challenges of your industry and craft bespoke solutions to meet your specific needs.</li>
          </ol>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Why Choose Mutabalis?</a></h3>
            <ul>
              <li>Expert Data Analysts: Our skilled team turns data into actionable insights, unlocking the full potential of your information.</li>
              <li>Intuitive Dashboards: Experience the power of visual data representation with our user-friendly, interactive dashboards.</li>
              <li>Comprehensive BI Tools: Transform your data into strategic assets with our cutting-edge Business Intelligence tools.</li>
            </ul>  
            <button class="back-button">Back</button>`;
          break;
        case 5:
          cardBody.innerHTML = `
          <span class="big-text">05</span>
          <div class="icon-box"><img src="img/icons/icon-08.png" alt="..."></div>
          <h3 class="position-relative pb-3 mb-4 h5"><a href="finger-print-access.php" class="text-white">Data Analytics</a></h3>
          <p class="mb-0 text-white">Ready to supercharge your decision-making process? Look no further! we specialize in delivering powerful data analytics, interactive dashboards, and Business Intelligence (BI) tools that elevate your business strategies.</p>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Explore Our Dynamic Use Cases:</a></h3>
          <ol>
              <li><strong>Data Analysis Excellence:</strong> Uncover actionable insights with our robust data analysis solutions. From market trends to customer behaviours, we turn raw data into strategic advantages.</li>
              <li><strong>Interactive Dashboards:</strong> Visualize success! Our interactive dashboards provide real-time, user-friendly snapshots of your key metrics. Make informed decisions at a glance.</li>
              <li><strong>Business Intelligence Tools:</strong> Drive efficiency with our BI tools. Transform complex data into accessible, understandable information, empowering your teams to perform at their best.</li>
              <li><strong>Custom Solutions for Your Industry:</strong> Tailored to perfection. We understand the unique challenges of your industry and craft bespoke solutions to meet your specific needs.</li>
          </ol>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Why Choose Mutabalis?</a></h3>
            <ul>
              <li>Expert Data Analysts: Our skilled team turns data into actionable insights, unlocking the full potential of your information.</li>
              <li>Intuitive Dashboards: Experience the power of visual data representation with our user-friendly, interactive dashboards.</li>
              <li>Comprehensive BI Tools: Transform your data into strategic assets with our cutting-edge Business Intelligence tools.</li>
            </ul>  
            <button class="back-button">Back</button>`;
          break;
        case 6:
          cardBody.innerHTML = `
          <span class="big-text">06</span>
          <div class="icon-box"><img src="img/icons/icon-09.png" alt="..."></div>
          <h3 class="position-relative pb-3 mb-4 h5"><a href="finger-print-access.php" class="text-white">Data Analytics</a></h3>
          <p class="mb-0 text-white">Ready to supercharge your decision-making process? Look no further! we specialize in delivering powerful data analytics, interactive dashboards, and Business Intelligence (BI) tools that elevate your business strategies.</p>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Explore Our Dynamic Use Cases:</a></h3>
          <ol>
              <li><strong>Data Analysis Excellence:</strong> Uncover actionable insights with our robust data analysis solutions. From market trends to customer behaviours, we turn raw data into strategic advantages.</li>
              <li><strong>Interactive Dashboards:</strong> Visualize success! Our interactive dashboards provide real-time, user-friendly snapshots of your key metrics. Make informed decisions at a glance.</li>
              <li><strong>Business Intelligence Tools:</strong> Drive efficiency with our BI tools. Transform complex data into accessible, understandable information, empowering your teams to perform at their best.</li>
              <li><strong>Custom Solutions for Your Industry:</strong> Tailored to perfection. We understand the unique challenges of your industry and craft bespoke solutions to meet your specific needs.</li>
          </ol>
          <h3 class="position-relative pb-3 mb-4 mt-4 h6"><a href="finger-print-access.php" class="text-white">Why Choose Mutabalis?</a></h3>
            <ul>
              <li>Expert Data Analysts: Our skilled team turns data into actionable insights, unlocking the full potential of your information.</li>
              <li>Intuitive Dashboards: Experience the power of visual data representation with our user-friendly, interactive dashboards.</li>
              <li>Comprehensive BI Tools: Transform your data into strategic assets with our cutting-edge Business Intelligence tools.</li>
            </ul>  
            <button class="back-button">Back</button>`;
          break;
        default:
          cardBody.innerHTML = 'New contents go here';
      }

      // Hide other cards
      cards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.add('hidden');
        }
      });
      console.log(cards);
      // Scroll to #services element
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
    const backButton = card.querySelector('.back-button');
    if (backButton) {
      backButton.addEventListener('click', function() {
        card.classList.remove('col-12', 'flip', 'flip-back-card');
        cardBody.classList.remove('flip-back'); // Add the flip-back class
        card.classList.add('index-service-card','col-md-6', 'col-lg-4', 'flip-back-card');
        cardBody.innerHTML = originalContents; // Restore the original contents

        // Show all cards
        cards.forEach(otherCard => {
          otherCard.classList.remove('hidden');
        });
        // Scroll to #services element
        servicesElement.scrollIntoView({ behavior: 'smooth' });
        console.log(cards);

        // Check if the expand button is active
        const newExpandButton = card.querySelector('.expand-button');
        if (newExpandButton) {
          console.log('Expand button is active');
        } else {
          console.log('Expand button is not active');
        }
      });
    }
  };
  
  
  const cardClickListener = function(event) {
    const expandButton = card.querySelector('.expand-button');
    if (expandButton && event.target === expandButton) {
      expandButtonListener();
    }
  };

  card.addEventListener('click', cardClickListener);
});

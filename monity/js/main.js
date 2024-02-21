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
            <button class="back-button butn-style03 white sm mt-3">Back</button>
        `;
          break;
        case 2:
          cardBody.innerHTML = `
          <span class="big-text">02</span>
          <div class="icon-box"><img src="img/icons/icon-12.png" alt="..."></div>
          <h3 class="position-relative pb-3 mb-4 h5"><a href="#" class="text-white">Statistical analysis</a></h3>

          <ol>
          <li><h5 class="text-white">Predictive Modelling:</h5>
              <ul>
                  <li>Regression Analysis: Linear or nonlinear regression models can be employed to predict a dependent variable based on one or more independent variables.</li>
                  <li>Time Series Analysis: Especially useful for forecasting future values based on historical data patterns.</li>
                  <li>Machine Learning Algorithms: Techniques such as decision trees, random forests, or neural networks can be used for predictive modelling.</li>
              </ul>
          </li>
          <li><h5 class="text-white">Risk Analysis:</h5>
              <ul>
                  <li>Probability Distributions: Analyzing and modelling uncertainties using probability distributions.</li>
                  <li>Monte Carlo Simulation: A method to model the probability of different outcomes in a process that cannot easily be predicted due to the intervention of random variables.</li>
              </ul>
          </li>
          <li><h5 class="text-white">Customer Segmentation:</h5>
              <ul>
                  <li>Cluster Analysis: Grouping similar data points together to identify distinct segments within the customer base.</li>
                  <li>Factor Analysis: Identifying underlying factors that influence customer behaviour.</li>
              </ul>
          </li>
          <li><h5 class="text-white">Optimization Solutions:</h5>
              <ul>
                  <li>Linear Programming: Formulating and solving optimization problems where both the objective function and constraints are linear.</li>
                  <li>Integer Programming: Extending linear programming to situations where decision variables must take on integer values.</li>
              </ul>
          </li>
          <li><h5 class="text-white">Statistical Consulting:</h5>
              <ul>
                  <li>Statistical Analysis and Reporting: Providing insights through descriptive statistics, hypothesis testing, and summary reports.</li>
                  <li>Experimental Design: Advising on the design and analysis of experiments to draw valid conclusions.</li>
              </ul>
          </li>
      </ol>
            <button class="back-button butn-style03 white sm mt-3">Back</button>`;
          break;
        case 3:
          cardBody.innerHTML = `
          <span class="big-text">03</span>
          <div class="icon-box"><img src="img/icons/icon-11.png" alt="..."></div>
          <h3 class="position-relative pb-3 mb-4 h5"><a href="finger-print-access.php" class="text-white">Machine Learning</a></h3>
          <ol>
          <li><h5 class="text-white">Unified Data Storage:</h5> Centralize your data. Our data warehousing solutions provide a unified platform to store structured and unstructured data, fostering seamless accessibility.</li>
          <li><h5 class="text-white">Real-Time Analytics:</h5> Make decisions in the moment. Our data warehouses enable real-time analytics, ensuring you have the latest insights at your fingertips.</li>
          <li><h5 class="text-white">Scalability and Performance:</h5> Grow with confidence. Our scalable data warehousing infrastructure adapts to your evolving needs while maintaining top-notch performance.</li>
          <li><h5 class="text-white">Data Integration:</h5> Break down silos. Integrate data from various sources, creating a cohesive and comprehensive view of your business landscape.</li>
          <li><h5 class="text-white">Advanced Reporting and Business Intelligence:</h5> Drive informed decisions. Leverage our data warehousing capabilities to generate insightful reports and empower your BI tools.</li>
      </ol>
      
      <h4 class="text-white">Why Choose Mutabalis?</h4>
      <ul>
          <li>Robust Architecture: Our data warehousing solutions are built on a robust architecture, ensuring reliability and durability.</li>
          <li>Expert Implementation: Benefit from the expertise of our implementation teams, ensuring seamless integration and optimization of your data warehouse.</li>
          <li>Custom Solutions: We tailor our data warehousing solutions to match the unique needs and goals of your business.</li>
      </ul>
            <button class="back-button butn-style03 white sm mt-3">Back</button>`;
          break;
        case 4:
          cardBody.innerHTML = `
          <span class="big-text">04</span>
          <div class="icon-box"><img src="img/icons/icon-13.png" alt="..."></div>
          <h3 class="position-relative pb-3 mb-4 h5"><a href="finger-print-access.php" class="text-white">Customer Segmentation Tools</a></h3>
          <p>Revolutionize Your Future with Mutabalis’s Machine Learning Solutions! Welcome to the era of intelligent decision-making! At Mutabalis we specialize in cutting-edge machine learning solutions, unleashing the power of algorithms to transform your data into actionable insights.</p>
        
          <h3 class="text-white">Explore Our Dynamic Use Cases:</h5>
          <ol>
              <li><h5 class="text-white">Predictive Analytics:</h5> Anticipate the future. Our machine learning models analyze historical data to predict trends, enabling proactive decision-making.</li>
              <li><h5 class="text-white">Recommendation Systems:</h5> Personalize experiences. Leverage our recommendation algorithms to deliver tailored suggestions, enhancing customer engagement.</li>
              <li><h5 class="text-white">Natural Language Processing (NLP):</h5> Understand language at its core. Our NLP models extract meaning and sentiment from textual data, opening new avenues for analysis.</li>
              <li><h5 class="text-white">Customer Churn Prediction:</h5> Retain your customer base. Our machine learning algorithms analyze patterns to predict potential churn, allowing proactive retention strategies.</li>
              <li><h5 class="text-white">Anomaly Detection:</h5> Identify the outliers. Our algorithms detect unusual patterns in data, providing early insights into potential issues or opportunities.</li>
          </ol>
          
          <h4 class="text-white">Why Choose Mutabalis?</h4>
          <ul>
              <li>Machine Learning Prowess: Our team comprises skilled data scientists and engineers with a deep understanding of machine learning techniques.</li>
              <li>Customized Solutions: Tailored to your needs. We design machine learning solutions that align with your business goals, ensuring maximum impact.</li>
              <li>Scalable Infrastructure: Our robust and scalable infrastructure supports the deployment of machine learning models at any scale.</li>
          </ul> 
            <button class="back-button butn-style03 white sm mt-3">Back</button>`;
          break;
        case 5:
          cardBody.innerHTML = `
          <span class="big-text">05</span>
          <div class="icon-box"><img src="img/icons/icon-08.png" alt="..."></div>
          <h3 class="position-relative pb-3 mb-4 h5"><a href="finger-print-access.php" class="text-white">Customer Segmentation Tools</a></h3>
          <p>Unlock Personalized Engagement with Mutabalis Customer Segmentation Tools! Maximize your marketing impact and enhance customer relationships! At Mutabalis we offer a suite of advanced customer segmentation tools, allowing you to tailor your strategies and connect with your audience on a whole new level.</p>
        
          <h5 class="text-white">Explore Our Dynamic Customer Segmentation Solutions:</h5>
          <ol>
              <li><h5 class="text-white">Demographic Segmentation:</h5> Understand your audience. Our tools categorize customers based on demographics such as age, gender, income, and location, providing a foundational understanding of your market.</li>
              <li><h5 class="text-white">Behavioral Segmentation:</h5> Dive into actions. Analyze customer behaviors, preferences, and purchasing patterns to create targeted campaigns that resonate with their interests.</li>
              <li><h5 class="text-white">Psychographic Segmentation:</h5> Go beyond demographics. Our tools delve into the psychological aspects of your audience, considering values, lifestyles, and attitudes for a deeper understanding.</li>
              <li><h5 class="text-white">RFM Analysis:</h5> Maximize value. Utilize Recency, Frequency, and Monetary analysis to identify high-value customers, re-engage lapsed customers, and optimize marketing ROI.</li>
              <li><h5 class="text-white">Predictive Segmentation:</h5> Anticipate needs. Leverage machine learning algorithms to predict future customer behaviors, enabling proactive segmentation and personalized offerings.</li>
          </ol>
          
          <h4 class="text-white">Why Choose Mutabalis?</h4>
          <ul>
              <li>Comprehensive Segmentation: Our tools offer a holistic approach, combining various segmentation techniques for a thorough understanding of your customer base.</li>
              <li>User-Friendly Interface: Seamlessly navigate and derive insights from our intuitive tools, designed for both marketing professionals and data analysts.</li>
              <li>Scalable Solutions: Whether you're a startup or an enterprise, our customer segmentation tools scale to meet the evolving needs of your business.</li>
          </ul>
            <button class="back-button butn-style03 white sm mt-3">Back</button>`;
          break;
        case 6:
          cardBody.innerHTML = `
          <span class="big-text">06</span>
          <div class="icon-box"><img src="img/icons/icon-09.png" alt="..."></div>
          <h3 class="position-relative pb-3 mb-4 h5"><a href="finger-print-access.php" class="text-white">Website Design and Search Engine Optimisation</a></h3>
          <p>Elevate Your Online Presence with Mutabalis Website Design and SEO Solutions! Ready to make a lasting impression in the digital landscape? At Mutabalis we specialize in creating visually stunning websites and optimizing them for search engines, ensuring your business stands out and reaches its full online potential.</p>
        
          <h3 class="text-white">Explore Our Dynamic Website Design and SEO Services:</h5>
          <ol>
              <li><h5 class="text-white">Strategic Website Design:</h5> Impress at first glance. Our expert designers craft visually appealing and user-friendly websites tailored to your brand identity and business goals.</li>
              <li><h5 class="text-white">Mobile Optimization:</h5> Reach every audience. Our websites are optimized for seamless performance across various devices, ensuring a smooth user experience on smartphones, tablets, and desktops.</li>
              <li><h5 class="text-white">SEO Audits and Strategy:</h5> Rise in search rankings. We conduct comprehensive SEO audits to identify opportunities and implement strategies that enhance your website's visibility on search engines.</li>
              <li><h5 class="text-white">Keyword Research and Optimization:</h5> Target your audience. Our SEO experts conduct in-depth keyword research and optimize your website's content to attract the right audience and improve search engine rankings.</li>
              <li><h5 class="text-white">Link Building:</h5> Boost authority. Our strategic link-building campaigns help establish your website as an authoritative source in your industry, improving its credibility with search engines.</li>
          </ol>
          
          <h4 class="text-white">Why Choose Mutabalis?</h4>
          <ul>
              <li>Creative Excellence: Our website designs blend creativity with functionality, creating a unique online presence for your brand.</li>
              <li>SEO Expertise: Benefit from our experienced SEO professionals who stay updated with the latest industry trends and algorithms.</li>
              <li>Measurable Results: Track the success of your online presence with our transparent reporting and analytics.</li>
          </ul>
            <button class="back-button butn-style03 white sm mt-3">Back</button>`;
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


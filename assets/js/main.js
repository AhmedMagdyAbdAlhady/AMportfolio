/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener("DOMContentLoaded", () => {
  (async function () {
    "use strict";

    try {
      /**
      * Header toggle
      */
      const headerToggleBtn = document.querySelector('.header-toggle');

      function headerToggle() {
        document.querySelector('#header').classList.toggle('header-show');
        headerToggleBtn.classList.toggle('bi-list');
        headerToggleBtn.classList.toggle('bi-x');
      }
      headerToggleBtn.addEventListener('click', headerToggle);

      /**
       * Hide mobile nav on same-page/hash links
       */
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (document.querySelector('.header-show')) {
            headerToggle();
          }
        });

      });

      /**
       * Toggle mobile nav dropdowns
       */
      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function (e) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        });
      });

      /**
       * Preloader
       */
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.remove();
        });
      }

      /**
       * Scroll top button
       */
      let scrollTop = document.querySelector('.scroll-top');

      function toggleScrollTop() {
        if (scrollTop) {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
      }
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);

      /**
       * Animation on scroll function and init
       */
      function aosInit() {
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
      window.addEventListener('load', aosInit);

      /**
       * Init typed.js
       */
      const selectTyped = document.querySelector('.typed');
      if (selectTyped) {
        let typed_strings = selectTyped.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
          strings: typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }

      /**
       * Initiate Pure Counter
       */
      new PureCounter();

      /**
       * Animate the skills items on reveal
       */
      let skillsAnimation = document.querySelectorAll('.skills-animation');
      skillsAnimation.forEach((item) => {
        new Waypoint({
          element: item,
          offset: '80%',
          handler: function (direction) {
            let progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
          }
        });
      });


      /**
       * Init isotope layout and filters
       */
      var projectsList = document.querySelector("#ProjectList");
      var categoryList = document.querySelector(".category");
      let link ="http://localhost:3000/projects"
      let res = await fetch(link);
      let projects= await res.json();
      console.log(projects)
      var itemProject = [];

      for (let i = 0; i < 6; i++) {
        itemProject.push(projects[i]);
      }

      const AllCategory = projects.filter((project, index, self) =>
        self.findIndex(p => p.category === project.category) === index
      );

      categoryList.innerHTML += `<li data-filter="*" class="filter-active">All</li>`;

      AllCategory.forEach((i) => {
        categoryList.innerHTML += `<li data-filter=".filter-${i.category}">${i.category}</li>`;
      });

      function renderProjectView(items) {
        projectsList.innerHTML = "";
        // ${project.category}
        // ${project.image}
        // ${project.title}

        items.forEach((project) => {
          projectsList.innerHTML += `
           <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-${project.category}">
             <div class="portfolio-content h-100">
               <img src=${project.image[0]} style="" class="img-fluid custome-width"  alt="${project.category}">
               <div class="portfolio-info">
                 <h4>${project.category} 1</h4>
                 <p>${project.title}</p>
                 <a href=${project.image} title="${project.category} 1" data-gallery="portfolio-gallery-${project.category}"
                   class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                 <a href="portfolio-details.html?id=${project.id}" title="More Details" class="details-link"><i
                     class="bi bi-link-45deg"></i></a>
               </div>
             </div>
           </div>
           <!-- End Portfolio Item -->
           `;
        });
      }
      renderProjectView(itemProject);

      /**
         * Initiate glightbox
         */
      const glightbox = GLightbox({
        selector: '.glightbox'
      });

      document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
          initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
          filters.addEventListener('click', function () {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aosInit === 'function') {
              aosInit();
            }
          }, false);
        });

      });

      /**
       * Init swiper sliders
       */
      function initSwiper() {
        document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
          let config = JSON.parse(
            swiperElement.querySelector(".swiper-config").innerHTML.trim()
          );

          if (swiperElement.classList.contains("swiper-tab")) {
            initSwiperWithCustomPagination(swiperElement, config);
          } else {
            new Swiper(swiperElement, config);
          }
        });
      }

      window.addEventListener("load", initSwiper);

      /**
       * Correct scrolling position upon page load for URLs containing hash links.
       */
      window.addEventListener('load', function (e) {
        if (window.location.hash) {
          if (document.querySelector(window.location.hash)) {
            setTimeout(() => {
              let section = document.querySelector(window.location.hash);
              let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
              window.scrollTo({
                top: section.offsetTop - parseInt(scrollMarginTop),
                behavior: 'smooth'
              });
            }, 100);
          }
        }
      });

      /**
       * Navmenu Scrollspy
       */
      let navmenulinks = document.querySelectorAll('.navmenu a');

      function navmenuScrollspy() {
        navmenulinks.forEach(navmenulink => {
          if (!navmenulink.hash) return;
          let section = document.querySelector(navmenulink.hash);
          if (!section) return;
          let position = window.scrollY + 200;
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
            navmenulink.classList.add('active');
          } else {
            navmenulink.classList.remove('active');
          }
        })
      }
      window.addEventListener('load', navmenuScrollspy);
      document.addEventListener('scroll', navmenuScrollspy);

    } catch (error) {
      console.error(error)
    }

  })();
})

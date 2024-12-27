document.addEventListener("DOMContentLoaded", () => {
    
    // Start Section 5 
var projects = [
    {
        id: "1",
        image: "https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/port2-360x380.jpg",
        category: "app",
        title: "Project Title01",
        url: "https://digitaltemplatemarket.com/wp/tradex-premium/munix_portfolio/project-title01/",
        urlMore: "https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/port2.jpg"
    },
    {
        id: "2",
        image: "https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/computer-472016_1920-360x380.jpg",
        category: "app",
        title: "Project Title02",
        url: "https://digitaltemplatemarket.com/wp/tradex-premium/munix_portfolio/project-title01/",
        urlMore: "https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/port2.jpg"
    },
    {
        id: "3",
        image: "https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/office-1209640_1920-1-360x380.jpg",
        category: "product",
        title: "Project Title03",
        url: "https://digitaltemplatemarket.com/wp/tradex-premium/munix_portfolio/project-title01/",
        urlMore: "https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/port2.jpg"
    },
    {
        id: "4",
        image: "https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/port7-360x380.jpg",
        category: "branding",
        title: "Project Title04",
        url: "https://digitaltemplatemarket.com/wp/tradex-premium/munix_portfolio/project-title01/",
        urlMore: "https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/port2.jpg"
    },
    {
        id: "5",
        image: "https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/suit-869380_1920-360x380.jpg",
        category: "books",
        title: "Project Title01",
        url: "https://digitaltemplatemarket.com/wp/tradex-premium/munix_portfolio/project-title01/",
        urlMore: "https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/port2.jpg"
    },


]

var projectsList = document.querySelector("#ProjectList");
var categoryList = document.querySelector(".category");
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

var itemCategory = document.getElementsByClassName("liCategory");

// const filterProject = (category, element) => {
//     debugger;

//     itemProject = [];

//     for (let i = 0; i < itemCategory.length; i++) {
//         itemCategory[i].classList.remove("active");
//     }

//     element.classList.add("active");

//     if (category === "all") {
//         for (let i = 0; i < 6; i++) {
//             itemProject.push(projects[i]);
//         }
//     } else {
//         itemProject = projects.filter((p) => p.category === category);
//     }

//     renderProjectView(itemProject);
// };

function renderProjectView(items) {
    projectsList.innerHTML = "";

    items.forEach((project) => {
        projectsList.innerHTML += `
            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-${project.category}">
              <div class="portfolio-content h-100">
                <img src=${project.image} class="img-fluid" alt="${project.category}">
                <div class="portfolio-info">
                  <h4>${project.category} 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href=${project.image} title="${project.category}" data-gallery="portfolio-gallery-${project.category}"
                    class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->
            `;
    });
}

// Set initial view with the first 6 projects
renderProjectView(itemProject);

// End Section 5 
})
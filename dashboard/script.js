document.addEventListener("DOMContentLoaded", () => {
    (async function () {

        let AddButton = document.getElementById("AddButton");
        let AddProject = document.getElementById("AddProject");
        let description =document.getElementById("description")
        let itemsProject = AddProject.querySelectorAll("input")
        console.log(itemsProject)
        console.log( itemsProject[5].value)
        AddButton.addEventListener("click",(e)=> {
            e.preventDefault() 
            //    id": "1",
            //   "image": ["assets/webSits/weather.png"],
            //   "category": "website",
            //   "title": "weatherApp",
            //   "ProjectDate": "2021/2",
            //   "gitHubLink": "https://github.com/AhmedMagdyAbdAlhady/weather-api.git",
            //   "description":

            let AddProject = document.getElementById("AddProject");
            let description =document.getElementById("description")
            let itemsProject = AddProject.querySelectorAll("input")
            console.log(itemsProject[5].value)
            fetch('http://localhost:3000/projects', {
                method: 'POST',
                body: JSON.stringify({
                    title: itemsProject[0].value,
                    image: itemsProject[1].value,
                    category: itemsProject[2].value,
                    link: itemsProject[3].value,
                    gitHubLink: itemsProject[4].value,
                    ProjectDate: itemsProject[5].value,
                    description: description.value,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => console.log("OK"+json))
        })
         






    }())
})
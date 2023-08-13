const apiKey = "live_zoRrURyeY8hAsyqQ1kKpuI9I7utUVMY4ro7kkUWaZ4Dj9NO6HxNnb6LbiyNE19d1";
const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`;

let catData; 
let factData;
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        catData = data;
    })

const button = document.getElementById("catGen"); // Make sure you have an element with ID "catGen"
const name_D = document.getElementById("nameDiv");

button.onclick = function() {
    if (catData) {
        let randNum = Math.floor(Math.random() * catData.length);
        display_image(catData[randNum].url);

        fetch("https://cat-fact.herokuapp.com/facts/random")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                factData = data;
                let newText = document.getElementById("texter");
                newText.textContent = factData.text;
                name_D.appendChild(newText);
            })
            .catch(function(error) {
                console.log("Error: " + error);
            });
    }
};

function display_image(image_url) {
    let imgBase = document.getElementById("Cat");
    imgBase.src = image_url;
}




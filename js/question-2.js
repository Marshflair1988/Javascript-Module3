// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=5f3b1807d5b64e5e84feeba8476b6ea2";

const loaderAnimation = document.querySelector(".loader")
const resultsContainer = document.querySelector(".container")

async function getGames() {

    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        const facts = data.results;
        const ratings = data.rating;
        const numberTags = data.tags
    
        resultsContainer.innerHTML = "";

    for(let i = 0; i < facts.length; i++)  {
        console.log(facts[i]);

        if (i === 8) {
            break;
        }

        const tagsLength = facts[i].tags.length;

        loaderAnimation.innerHTML = "";
        resultsContainer.innerHTML += `<div class="result">
        <span><li>Title: ${facts[i].name}</li></span>
        <span><li>Rating: ${facts[i].rating}</li></span>
        <span><li>Tags: ${tagsLength}</li></span>
        </div>`;
    }
    } catch (error){
        resultsContainer.innerHTML = displayError("An error occured when calling the API");
    }
    
}

getGames();
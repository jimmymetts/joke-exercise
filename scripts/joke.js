console.log("test")

const setupElement = document.querySelector("#setup");
const punchLineElement = document.querySelector("#punchline");

function addToDom(jokeObj) {
    setupElement.innerHTML = `<h4>${jokeObj.setup}</h4>`;
    punchLineElement.innerhtml = `<p>${jokeObj.punchline}</p>`;

}


fetch("https://official-joke-api.appspot.com/random_joke")
.then(result => result.json()) 
.then(parsedJSON => {
    console.log("joke", parsedJSON.punchline, parsedJSON.setup);

    addToDom(parsedJSON)
})






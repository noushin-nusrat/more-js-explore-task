// task-1
// 1a) Function to display a message after 5 seconds
function displayMessage() {
    setTimeout(function () {
        alert("The message after 5 seconds");
    }, 5000); // 5000 milliseconds = 5 seconds
}
// displayMessage();

// 1b) Function to log a greeting message after a given delay time
function delayedGreeting(name, delayTime) {
    setTimeout(function () {
        alert("Hello, " + name + "!");
    }, delayTime);
}
// delayedGreeting('soha', 3);

//task-2
function tellJoke() {
    console.log("Why don't scientists trust atoms? Because they make up everything!");
}

const jokeInterval = setInterval(tellJoke, 2000);

// After 10 seconds, stop telling jokes
setTimeout(() => {
    clearInterval(jokeInterval); // Stop the interval
}, 10000);

//task-3
async function fetchDataAndLogMessage(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Log the joke message
        console.log(data.joke);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Input API URL
const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?type=single';

// Call the async function
// fetchDataAndLogMessage(apiUrl);

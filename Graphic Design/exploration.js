// Define the text and background arrays
const textArray = [
    {
        heading: "Welcome to the Exploration Page!",
        content: "Here's some text about our exploration."
    },
    {
        heading: "Ocean View",
        content: "We're exploring the beautiful ocean with its deep blue color and wonderful scenery."
    },
    {
        heading: "Floating in the Ocean",
        content: "Here we are, floating on the surface of the ocean, surrounded by nothing but water and sky."
    },
    {
        heading: "In the Forest",
        content: "We've left the ocean and are now wandering through the lush greenery of the forest, enjoying the fresh air and peaceful atmosphere."
    }
];

const backgroundArray = [
    "url('sourceimg/backgrounds/oceandarkview.jpg')",
    "url('sourceimg/backgrounds/floatingocean.jpg')",
    "url('sourceimg/backgrounds/forest.jpg')"
];

// Get the necessary DOM elements
const textContainer = document.querySelector('#text-container');
const background = document.querySelector('.background-image');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

// Set initial index values
let currentText = 0;
let currentBg = 0;

// Function to update the text container content
function updateText() {
    textContainer.querySelector('h1').textContent = textArray[currentText].heading;
    textContainer.querySelector('p').textContent = textArray[currentText].content;
}

// Function to update the background image
function updateBg() {
    background.style.backgroundImage = backgroundArray[currentBg];
}

// Function to handle the next button click
function nextClick() {
    currentText++;
    currentBg++;

    if (currentText >= textArray.length) {
        currentText = 0;
    }

    if (currentBg >= backgroundArray.length) {
        currentBg = 0;
    }

    updateText();
    updateBg();
    
    // hide prevButton on first content
    if (currentText === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }
    
    // limit nextButton clicks to 3
    if (currentText === 3) {
        nextButton.style.display = "none";
    }
}

// Function to handle the previous button click
function prevClick() {
    currentText--;
    currentBg--;

    if (currentText < 0) {
        currentText = textArray.length - 1;
    }

    if (currentBg < 0) {
        currentBg = backgroundArray.length - 1;
    }

    updateText();
    updateBg();
    
    // hide prevButton on first content
    if (currentText === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }
    
    // unhide nextButton
    nextButton.style.display = "block";
}

// Add event listeners to the buttons
nextButton.addEventListener('click', nextClick);
prevButton.addEventListener('click', prevClick);

// Call the update functions to set the initial content and background
updateText();
updateBg();

// hide prevButton on first content
prevButton.style.display = "none";

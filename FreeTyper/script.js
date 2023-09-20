const topics = [
    "Adventure",
    "Nature",
    "Technology",
    "Exploration",
    "Creativity",
    "Friendship",
    "Dreams",
    "Happiness",
    "Art",
    "Music",
    "Food",
    "Travel",
    "Learning",
    "Science",
    "Space",
    "Innovation",
    "History",
    "Culture",
    "Sustainability",
    "Fitness",
    "Health",
    "Books",
    "Movies",
    "Photography",
    "Animals",
    "Education",
    "Family",
    "Love",
    "Challenges",
    "Success",
    "Communication",
    "Leadership",
    "Inspiration",
    "Adventure",
    "Nature",
    "Technology",
    "Exploration",
    "Creativity",
    "Friendship",
    "Dreams",
    "Happiness",
    "Art",
    "Music",
    "Food",
    "Travel",
    "Learning",
    "Science",
    "Space",
    "Innovation",
    "History",
    "Culture",
    "Sustainability",
    "Fitness",
    "Health",
    "Books",
    "Movies",
    "Photography",
    "Animals",
    "Education",
    "Family",
    "Love",
    "Challenges",
    "Success",
    "Communication",
    "Leadership",
    "Inspiration",
    "Adventure",
    "Nature",
    "Technology",
    "Exploration",
    "Creativity",
    "Friendship",
    "Dreams",
    "Happiness",
    "Art",
    "Music",
    "Food",
    "Travel",
    "Learning",
    "Science",
    "Space",
    "Innovation",
    "History",
    "Culture",
    "Sustainability",
    "Fitness",
    "Health",
    "Books",
    "Movies",
    "Photography",
    "Animals",
    "Education",
    "Family",
    "Love",
    "Challenges",
    "Success",
    "Communication",
    "Leadership",
    "Inspiration",
    "Adventure",
    "Nature",
    "Technology",
    "Exploration",
    "Creativity",
    "Friendship",
    "Dreams",
    "Happiness",
    "Art",
    "Music",
    "Food",
    "Travel",
    "Learning",
    "Science",
    "Space",
    "Innovation",
    "History",
    "Culture",
    "Sustainability",
    "Fitness",
    "Health",
    "Books",
    "Movies"
];

let currentTopicIndex = -1;
let correctSentences = 0;
let fails = 0;
let totalTime = 0;
let timerInterval;

const wordDisplay = document.getElementById("word");
const sentenceInput = document.getElementById("sentence-input");
const pointsCounter = document.getElementById("points-counter");

function startGame() {
    currentTopicIndex = -1;
    correctSentences = 0;
    fails = 0;
    totalTime = 0;
    displayNextTopic();
    pointsCounter.innerHTML = `Correct Sentences: ${correctSentences}<br>Fails: ${fails}<br>Time: 0:00`;


    clearInterval(timerInterval);
    timerInterval = setInterval(updateTime, 1000); // Update time every second
}

function updateTime() {
    totalTime++;
    pointsCounter.innerHTML = `Correct Sentences: ${correctSentences}<br>Fails: ${fails}<br>Time: ${formatTime(totalTime)}`;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function displayNextTopic() {
    currentTopicIndex++;
    if (currentTopicIndex < topics.length) {
        wordDisplay.textContent = `Write a sentence using the word: ${topics[currentTopicIndex]}`;
        sentenceInput.value = "";
    } else {
        wordDisplay.textContent = "Game Over!";
        sentenceInput.style.display = "none";


        clearInterval(timerInterval);
    }
}

function createPatternFromTopic(topic) {
    const escapedTopic = topic.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    

    const pattern = escapedTopic.split('').map(letter => `${letter}[^]*?`).join('');


    return new RegExp(pattern, 'i');
}

function checkSentence() {
    if (currentTopicIndex < topics.length) {
        const userSentence = sentenceInput.value.toLowerCase();
        const topic = topics[currentTopicIndex].toLowerCase();
        
 
        const pattern = createPatternFromTopic(topic);

        const isCorrect = pattern.test(userSentence);

        if (isCorrect) {
            correctSentences++;
        } else {
            fails++;
        }

        displayNextTopic();
    }
}

sentenceInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkSentence();
    }
});

startGame();
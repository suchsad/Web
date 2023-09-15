const channelID = 'UCcp53g4Fzs8RUUpc88eRiTw';
const apiKey = 'AIzaSyAR-Vm-gd4AGJGnOtuQl3h3-CuoAZJ_eBA';

const profile = document.getElementById('profile');
const profilePopup = document.getElementById('profile-popup');
const popupProfileImage = document.getElementById('popup-profile-image');
const profileImage = document.getElementById('profile-image');
const popupUsername = document.getElementById('popup-username');
const popupDescription = document.getElementById('popup-description');

// Function to fetch profile image
function fetchProfileImage() {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelID}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.items[0].snippet.thumbnails.medium.url;
            popupProfileImage.src = imageUrl;
            profileImage.src = imageUrl;
        })
        .catch(error => {
            console.error('Error fetching YouTube channel data:', error);
        });
}

// Function to open profile pop-up
function openProfilePopup() {
    fetchProfileImage();

    popupDescription.textContent = document.getElementById('description').textContent;
    profilePopup.style.display = 'flex';
    setTimeout(() => {
        profilePopup.style.opacity = '1';
    }, 100);
}

// Function to close profile pop-up
function closeProfilePopup() {
    profilePopup.style.opacity = '0';
    setTimeout(() => {
        profilePopup.style.display = 'none';
    }, 300);
}

profile.addEventListener('click', openProfilePopup);

document.addEventListener('click', (event) => {
    if (event.target === profilePopup) {
        closeProfilePopup();
    }
});
fetchProfileImage();

const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const raindrops = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createRaindrop() {
    return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        length: random(10, 30),
        speed: random(2, 5),
    };
}

function drawRaindrop(raindrop) {
    ctx.beginPath();
    ctx.moveTo(raindrop.x, raindrop.y);
    ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
    ctx.strokeStyle = '#00f';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function updateRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i];
        raindrop.y += raindrop.speed;

        if (raindrop.y > canvas.height) {
            raindrops[i] = createRaindrop();
        }

        drawRaindrop(raindrop);
    }

    requestAnimationFrame(updateRain);
}

for (let i = 0; i < 100; i++) {
    raindrops.push(createRaindrop());
}

updateRain();

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-console");
    const consoleDiv = document.getElementById("console");
    const inputField = document.getElementById("user-input");
    

    toggleButton.addEventListener("click", function () {
        if (consoleDiv.style.display === "none" || consoleDiv.style.display === "") {
            consoleDiv.style.display = "block";
            inputField.style.display = "block";
            inputField.focus();
        } else {
            consoleDiv.style.display = "none";
            inputField.style.display = "none";
        }
    });

    function logToConsole(message) {
        const outputElement = document.createElement("div");
        outputElement.innerHTML = message;
        consoleDiv.appendChild(outputElement);
    }

const commands = {
    "help": "List all available commands",
    "cls": "Clear the console",
    "songroll": "Roll a random song",
    "socials": "Find me here",
    "shiggy": "Custom command",
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayAvailableCommands() {
    const commandList = Object.entries(commands);

    const colors = ["#6d9e79", "#c994ff", "#cc2944", "#36f774", "#f2c274", "#bd5a3c", "#70a1e0"];

    shuffleArray(colors);

    commandList.forEach(([command, description], index) => {
        const color = colors[index] || "#000000";
        const commandElement = document.createElement("div");
        commandElement.style.color = color;
        commandElement.innerHTML = `${command} - ${description}`;
        consoleDiv.appendChild(commandElement);
    });
}

function handleCommand(command) {
    switch (command.toLowerCase()) {
        case "socials":
            case "socials":
                logToConsole("GitHub: <a href='https://github.com/melxncholicxl' target='_blank'>Ven</a>");
                logToConsole("Spotify: <a href='https://open.spotify.com/user/31br6oawjyxgbxfqld4xotshfr5u?si=12bb422e479b4b20' target='_blank'>Ven</a>");
                logToConsole("YouTube: <a href='https://www.youtube.com/@zxhraay/' target='_blank'>Zxhra</a>");
                logToConsole("Discord: 1104633295733530624 ");
                break;
        case "contact":
            logToConsole("You can contact us at contact@example.com");
            break;
        case "shiggy":
            logToConsole("Implementing 'shiggy' command...");
            break;
        case "cls":
            consoleDiv.innerHTML = '';
            inputField.value = '';
            break;
        case "songroll":
            fetchRandomSong();
            break;
        case "help":
            displayAvailableCommands();
            break;
        default:
            logToConsole("Command not recognized. Type 'help' for a list of available commands.");
    }
}

function fetchRandomSong() {
    fetch("resources/songs.json")
        .then((response) => response.json())
        .then((data) => {
            const songPairs = Object.entries(data);
            const randomPair = songPairs[Math.floor(Math.random() * songPairs.length)];
            const outputElement = document.createElement("div");
            outputElement.innerHTML = `Rolling.... The song you rolled is "${randomPair[0]} - ${randomPair[1]}"`;
            outputElement.style.color = "#6d9e79";
            outputElement.style.fontWeight = "bold";
            consoleDiv.appendChild(outputElement);
        })
        .catch((error) => {
            logToConsole("An error occurred while fetching the song.");
            console.error(error);
        });
}

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const command = inputField.value.trim();
        if (command !== "") {
            logToConsole(`> ${command}`);
            handleCommand(command);
            inputField.value = "";
        }
    }
});

logToConsole("Hi! Let me be your guide!");
logToConsole("Type 'help' to retrieve more information.");

});
const toggleButton = document.getElementById("toggle-console"); 
const consoleDiv = document.getElementById("console"); 

toggleButton.addEventListener("click", function () {
    toggleButton.style.display = "none"; 

    inputField.focus(); 
});

document.addEventListener("DOMContentLoaded", function () {
 


    const projectsButton = document.querySelector('.projects-button');

 
    const projectsPopup = document.getElementById('projects-popup');
    const projectList = document.getElementById('project-list');
    const darkLayer = document.getElementById('dark-layer'); 

    
    projectsButton.addEventListener('click', () => {
      
        projectList.innerHTML = '';

        
        const exampleProjects = [
            { name: 'Username Muse', link: 'https://github.com/melxncholicxl/Username' },
            { name: 'Image Converter', link: 'https://github.com/melxncholicxl/Convertion' },
            { name: 'HTML Based Projects', link: 'https://github.com/melxncholicxl/Web'},
            { name: 'Various Side Projects', link: 'https://github.com/melxncholicxl/Basics'},
            { name: 'Singleplayer Pong', link: 'https://github.com/melxncholicxl/SillyPong'},
            { name: 'KoGaMa Addon Sheet', link: 'https://github.com/melxncholicxl/KoGaMa' },
        ];

        exampleProjects.forEach((project) => {
            const projectItem = document.createElement('a');
            projectItem.href = project.link;
            projectItem.textContent = project.name;
            projectItem.className = 'project-link';

           
            projectList.appendChild(projectItem);
        });

  
        projectsPopup.style.display = 'block';
        darkLayer.style.display = 'block'; 
    });


    function closeProjectsPopup() {
        projectsPopup.style.display = 'none';
        darkLayer.style.display = 'none'; 
    }

    
    darkLayer.addEventListener('click', closeProjectsPopup); 

   
});

const stopButton = document.getElementById('stopButton');
const loopButton = document.getElementById('loopButton');
const volumeSlider = document.getElementById('volumeSlider');
const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('playButton'); 


if (playPauseButton) {
    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = 'Stop';
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
        }
    });
} else {
    console.error('playPauseButton element not found in the HTML.');
}



stopButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseButton.textContent = 'Play';
});

loopButton.addEventListener('click', () => {
    audioPlayer.loop = !audioPlayer.loop;
    loopButton.textContent = audioPlayer.loop ? 'Off' : 'On';
});

volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});

// Discord Webhook URL (Replace with your webhook URL)
const webhookUrl = 'https://discord.com/api/webhooks/1152318416921821254/uKPFMrU1hffATuQi_qMx4407Agq8TeoQICsIN5pUnLHoE7TlekuHi4nM4xOGCL6hGM9-';

// Get form elements
const contactForm = document.getElementById('contact-form');
const usernameInput = document.getElementById('username');
const topicInput = document.getElementById('topic');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-button');

// Handle form submission
sendButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const topic = topicInput.value || 'None'; // Default to 'None' if no topic provided
    const message = messageInput.value;

    // Create a JSON payload to send to the webhook
    const payload = {
        username: username,
        embeds: [
            {
                title: 'Contact Form Submission',
                description: `**Username:** ${username}\n**Topic:** ${topic}\n**Message:**\n${message}`,
                color: 0xFF00FF, // Magenta color
            },
        ],
    };

    // Send the payload to the Discord webhook
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (response.ok) {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                alert('Failed to send the message. Please try again later.');
            }
        })
        .catch((error) => {
            console.error(error);
            alert('An error occurred while sending the message.');
        });
});

// Get elements
const contactButton = document.getElementById('contact-button');
const contactSection = document.getElementById('contact-section');

// Add click event to the contact button
contactButton.addEventListener('click', () => {
    // Toggle the contact section's visibility
    if (contactSection.style.display === 'none' || contactSection.style.display === '') {
        // Show the contact section with a sliding animation
        contactSection.style.display = 'block';
        contactSection.style.animation = 'slide-in 0.5s forwards';
    } else {
        // Hide the contact section with a sliding animation
        contactSection.style.animation = 'slide-out 0.5s forwards';
        setTimeout(() => {
            contactSection.style.display = 'none';
        }, 500);
    }
});
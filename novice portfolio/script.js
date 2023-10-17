// Function to randomly load a background image
function loadBackgroundImage() {
  const images = ["default.png", "ghilbi1.jpg", "ghilbi2.jpg", "ghilbi3.jpg", "ghilbi4.jpg","ghilbi5.jpg", "ghilbi5.jpg", "ghilbi6.jpg"];
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];
  const body = document.body;
  body.style.transition = "background-image 2s ease-in-out"; // Add CSS transition
  body.style.backgroundImage = `url('images/${selectedImage}')`;
}

// Call the function to load a random background image
loadBackgroundImage();

// #time
function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let hourStr = hours + ":" + minutes + " " + ampm;
  let dateStr = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  document.getElementById("hour").innerHTML = hourStr;
  document.getElementById("date").innerHTML = dateStr;
}

updateTime();
setInterval(updateTime, 1000);

const input = document.getElementById("terminal-input");
const consoleOutput = document.getElementById("consoleOutput");
const logo = document.getElementById("logo");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const command = input.value.trim().toLowerCase();
    input.value = "";
    consoleOutput.innerHTML += `<p><span class="prompt">$</span> ${command}</p>`;
    if (logo.style.display === "block" && command !== "logo") {
      logo.style.display = "none";
    }
    switch (command) {
      case "":
        break;
      case "help":
        consoleOutput.innerHTML += `<p>Available commands:</p>
                                      <ul>
                                      about, projects, idea,  background,  contact, credits, logo, party
                                      
                                      </ul>`;
        break;
        case "about":
          consoleOutput.innerHTML += `<p>Information about me</p>
                                        <ul>
                                            I'm Simon, a young and experienced developer.
                                            Currently all of my projects are made for my personal satisfaction, 
                                            If there's something you want to talk about, I'm always available!
                                        </ul>
          
          `;
          break;
          case "projects":
            consoleOutput.innerHTML += `<p>Check out my projects:</p>
                                         <ul>
                                              <li><a href="https://lowongravity.github.io/songshuffle/">New & Comfy Website for Spotify API</a></li>                                          
                                            <li><a href="https://github.com/LowOnGravity/FriendScraper">Discord Friend Scraper</a></li>
                                           <li><a href="https://github.com/LowOnGravity/KoGaMa">KoGaMa Addons & Themes</a></li>
                                               
                                         </ul>`;
            break;
        case "contact":
          consoleOutput.innerHTML += `<p>You can find me here:</p>
          <ul>
            <li><a href="https://www.youtube.com/channel/UCOUn4CwHJIWhYOjQ8c2wxzA">Youtube</a></li>
            <li><a href="https://github.com/LowOnGravity">Github</a></li>
          </ul>`;
         
        break;
        case "credits":
          consoleOutput.innerHTML += `<p>These people deserve recognition:</p>
          <ul>
            <li>Visuals: Corydon </li>
            <li>Hosting: NotAbby </li>
            
        </ul>`



        break;
      case "logo":
        if (logo.style.display === "none") {
          logo.style.display = "block";
        } else {
          logo.style.display = "none";
        }
        break;
        case "background":
      loadBackgroundImage(true);
      break;
      case "party":
        consoleOutput.innerHTML +=  ` <p> To stop this command refresh website. </p>`
        rainbowText(true);
      break;
        case "idea":
          consoleOutput.innerHTML +=  ` I'm currently working on a few projects, but if there's something that you'd like me to make
          you can contact me here: aaav#0023`
      break;
      case "16092020":
        consoleOutput.innerHTML += `<p>It is an important date.</p>
        <ul>
            <li>If you're the person that it is meant for,
            firstly congrats on finding this hidden message,
            and secondly, I hope you still remember me, contact me so I know you're fine!
           </li>
        </ul>`
        break;
      default:
        consoleOutput.innerHTML += `<p>${command}: command not found</p>`;
        break;
    }
    if (consoleOutput.scrollHeight > consoleOutput.clientHeight) {
      consoleOutput.innerHTML = `<p><span class="prompt">$</span></p>`;
    }
    window.scrollTo(0, document.body.scrollHeight);
  }
  let rainbowInterval;

function rainbowText() {
  const allTextElements = document.querySelectorAll("body *");

  rainbowInterval = setInterval(() => {
    allTextElements.forEach((element) => {
      element.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      element.style.transition = "color 0.5s ease";
    });
  }, 100);
}

function disableRainbowText() {
  clearInterval(rainbowInterval);
  const allTextElements = document.querySelectorAll("body *");
  allTextElements.forEach((element) => {
    element.style.color = "";
    element.style.transition = "";
  });
}

function handleCommand(input) {
  const command = input.toLowerCase().trim();

  switch (command) {
    case "party":
      rainbowText();
      setTimeout(() => {
        disableRainbowText();
      }, 5000);
      break;
    // other commands
    default:
      // default message
      break;
  }
}
  


});

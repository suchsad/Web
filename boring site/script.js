document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const themeSection = document.querySelector("#themes");
  const themeItems = document.querySelectorAll(".theme-item");
  const contactSection = document.querySelector("#contact");
  const pluginsSection = document.querySelector(".plugins-section");
  const pluginContainers = document.querySelectorAll(".plugin-container");
  const guidesSection = document.querySelector("#guides");
  const guideItems = document.querySelectorAll(".expandable-item");
  const creditsSection = document.querySelector("#credits"); 

  themeSection.classList.add("hide-themes");

  contactSection.style.display = "none";
  pluginsSection.style.display = "none";
  guidesSection.style.display = "none";
  creditsSection.style.display = "none"; 

  let currentSection = document.querySelector(".section.active");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetSectionId = link.getAttribute("href");
      const targetSection = document.querySelector(targetSectionId);

      if (targetSection === currentSection) return;

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      currentSection.classList.add("fade-out");
      targetSection.classList.add("fade-in", "active");

      setTimeout(() => {
        currentSection.classList.remove("active", "fade-out");
        targetSection.classList.remove("fade-in");
        currentSection = targetSection;
      }, 500);

      if (targetSectionId === "#contact") {
        contactSection.style.display = "block";
      } else {
        contactSection.style.display = "none";
      }

      if (targetSectionId !== "#themes") {
        themeSection.classList.add("hide-themes");
      } else {
        themeSection.classList.remove("hide-themes");
      }

      if (targetSectionId === "#plugins") {
        pluginsSection.style.display = "block";
      } else {
        pluginsSection.style.display = "none";
      }

      if (targetSectionId === "#guides") {
        guidesSection.style.display = "block";
      } else {
        guidesSection.style.display = "none";
      }
            
            if (targetSectionId === "#credits") {
              if (creditsSection.style.display === "none") {
                creditsSection.style.display = "block";
              } else {
                creditsSection.style.display = "none";
              }
            } else {
              creditsSection.style.display = "none"; 
            }

      const contentElements = document.querySelectorAll(".box-content");
      contentElements.forEach((contentElement) => {
        contentElement.style.display = "none";
      });

      const selectedContent = targetSection.querySelector(".box-content");
      if (selectedContent) {
        selectedContent.style.display = "block";
      }
    });
  });

  themeItems.forEach((item) => {
    const details = item.querySelector(".theme-details");

    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        details.style.maxHeight = null;
      } else {
        themeItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
          otherItem.querySelector(".theme-details").style.maxHeight = null;
        });
        item.classList.add("active");
        details.style.maxHeight = details.scrollHeight + "px";
      }
    });
  });

  pluginContainers.forEach((container) => {
    const details = container.querySelector(".plugin-details");

    container.addEventListener("click", () => {
      pluginContainers.forEach((otherContainer) => {
        if (otherContainer !== container) {
          otherContainer.querySelector(".plugin-details").style.maxHeight = null;
        }
      });
      details.style.maxHeight = details.style.maxHeight ? null : details.scrollHeight + "px";
    });
  });

  guideItems.forEach((item) => {
    const details = item.querySelector(".expandable-details");

    item.addEventListener("click", () => {
      if (details.style.maxHeight) {
        details.style.maxHeight = null;
      } else {
        details.style.maxHeight = details.scrollHeight + "px";
      }
    });
  });

  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  const modalImg = document.querySelector(".modal-img");
  const previewLinks = document.querySelectorAll(".preview-link");
  const closeModal = document.querySelector(".close");

  previewLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const imgSrc = link.getAttribute("href");
      modalImg.src = imgSrc;

      const tempImg = new Image();
      tempImg.src = imgSrc;
      tempImg.onload = function () {
        const imgWidth = tempImg.width;
        const imgHeight = tempImg.height;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const desiredWidthPercentage = 0.7;
        const desiredHeightPercentage = 0.7;

        modalContent.style.width = viewportWidth * desiredWidthPercentage + "px";
        modalContent.style.height = viewportHeight * desiredHeightPercentage + "px";
        modal.style.display = "block";
      };
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


// Get all section elements with the "transition-section" class
const transitionSections = document.querySelectorAll('.transition-section');

// Add an event listener to each navigation link to handle the section transitions
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the target section's ID from the href attribute
    const targetSectionId = link.getAttribute('href');

    // Remove the "active" class from all sections
    transitionSections.forEach(section => {
      section.classList.remove('active');
    });

    // Add the "active" class to the target section
    const targetSection = document.querySelector(targetSectionId);
    targetSection.classList.add('active');

    // Smoothly scroll to the target section
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}


let currentLanguage = "en"; // Default language

function changeLanguage(language) {
  fetch('./languages.json')
    .then((response) => response.json())
    .then((data) => {
      const langData = data[language];
      document.querySelector('.nav-links a[href="#about"]').textContent = langData.navAbout;
      document.querySelector('.nav-links a[href="#experience"]').textContent = langData.navExperience;
      document.querySelector('.nav-links a[href="#projects"]').textContent = langData.navProjects;
      document.querySelector('.nav-links a[href="#contact"]').textContent = langData.navContact;

      document.querySelector('#profile .section__text__p1').textContent = langData.hello;
      document.querySelector('#profile .title').textContent = "Leandro Wanderley";
      document.querySelector('#profile .section__text__p2').textContent = langData.jobTitle;

      document.querySelector('#about .section__text__p1').textContent = langData.getToKnow;
      document.querySelector('#about .title').textContent = langData.aboutMe;
      document.querySelector('#about .text-container p').textContent = langData.aboutText;

      document.querySelector('#experience .section__text__p1').textContent = langData.exploreMy;
      document.querySelector('#experience .title').textContent = langData.experience;
      document.querySelector('#experience .experience-sub-title:first-of-type').textContent = langData.languages;
      document.querySelector('#experience .experience-sub-title:last-of-type').textContent = langData.helpings;

      document.querySelector('#projects .section__text__p1').textContent = langData.browseRecent;
      document.querySelector('#projects .title').textContent = langData.projects;

      document.querySelector('#contact .section__text__p1').textContent = langData.getInTouch;
      document.querySelector('#contact .title').textContent = langData.contactMe;
    })
    .catch((error) => console.error('Error loading languages:', error));
}

// Initialize the default language
changeLanguage(currentLanguage);

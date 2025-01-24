function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}


// function getBrowserLanguage() {
//   const language = navigator.language || navigator.userLanguage; // Get the user's preferred language
//   const supportedLanguages = ['en', 'pt']; // List of supported languages
  
//   // Check if the browser language is in the list of supported languages
//   if (supportedLanguages.includes(language.split('-')[0])) {
//     return language.split('-')[0]; // Return language code (e.g., "en", "pt")
//   }
//   return 'en'; // Fallback to English if the language is not supported
// }

// function changeLanguage(language) {
//   fetch('./languages.json')
//     .then((response) => response.json())
//     .then((data) => {
//       const langData = data[language];

//       // Navbar
//       document.querySelector('.nav-links a[href="#about"]').textContent = langData.navbar.about;
//       document.querySelector('.nav-links a[href="#experience"]').textContent = langData.navbar.experience;
//       document.querySelector('.nav-links a[href="#projects"]').textContent = langData.navbar.projects;
//       document.querySelector('.nav-links a[href="#contact"]').textContent = langData.navbar.contact;

//       // Profile
//       document.querySelector('#profile .section__text__p1').textContent = langData.profile.hello;
//       document.querySelector('#profile .title').textContent = "Leandro Wanderley"; // Static name
//       document.querySelector('#profile .section__text__p2').textContent = langData.profile.job;

//       // About
//       document.querySelector('#about .section__text__p1').textContent = langData.about.getToKnow;
//       document.querySelector('#about .title').textContent = langData.about.aboutMe;
//       document.querySelector('#about .text-container p').textContent = langData.about.description;

//       // Experience
//       document.querySelector('#experience .section__text__p1').textContent = langData.experience.explore;
//       document.querySelector('#experience .title').textContent = langData.experience.experienceTitle;
//       document.querySelector('#experience .experience-sub-title:first-of-type').textContent = langData.experience.languages;
//       document.querySelector('#experience .experience-sub-title:last-of-type').textContent = langData.experience.helpings;

//       // Projects
//       document.querySelector('#projects .section__text__p1').textContent = langData.projects.recent;
//       document.querySelector('#projects .title').textContent = langData.projects.sistemaConsultas;

//       // Contact
//       document.querySelector('#contact .section__text__p1').textContent = langData.contact.getInTouch;
//       document.querySelector('#contact .title').textContent = langData.contact.contactMe;

//       // Footer
//       document.querySelector('footer').textContent = langData.footer.copyright;

//     })
//     .catch((error) => console.error('Error loading languages:', error));
// }

// const defaultLanguage = getBrowserLanguage();
// changeLanguage(defaultLanguage);
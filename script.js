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
//       const langData = data[language]; // Ensure langData is properly defined based on the selected language

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
//       document.querySelector('#about .about-containers .details-container:first-of-type h3').textContent = langData.about.experienceTitle;
//       document.querySelector('#about .about-containers .details-container:last-of-type h3').textContent = langData.about.educationTitle;
//       document.querySelector('#about .about-containers .details-container:first-of-type p').textContent = langData.about.experienceDetails;
//       document.querySelector('#about .about-containers .details-container:last-of-type p').textContent = langData.about.educationDetails;

//       // Experience
//       document.querySelector('#experience .section__text__p1').textContent = langData.experience.explore;
//       document.querySelector('#experience .title').textContent = langData.experience.experience;
//       document.querySelector('#experience .experience-sub-title:first-of-type').textContent = langData.experience.languages;
//       document.querySelector('#experience .experience-sub-title:last-of-type').textContent = langData.experience.helpings;

//       // Projects
//       document.querySelector('#projects .section__text__p1').textContent = langData.projects.recent;
//       document.querySelector('#projects .title').textContent = langData.projects.projects;

//       // Project Titles and Links
//       const projectElements = document.querySelectorAll('.project-title');
//       projectElements[0].textContent = langData.projects.sistemaConsultas;
//       projectElements[1].textContent = langData.projects.geminiBot;
//       projectElements[2].textContent = langData.projects.csvAnalyzer;

//       // Contact
//       document.querySelector('#contact .section__text__p1').textContent = langData.contact.getInTouch;
//       document.querySelector('#contact .title').textContent = langData.contact.contactMe;

//       // Footer
//       document.querySelector('footer p').textContent = langData.footer.copyright;

//       // Social links alt texts
//       document.querySelectorAll('.icon[alt="My LinkedIn profile"]').forEach((el) => {
//         el.setAttribute('alt', langData.profile['alt-socials']['alt-linkedin']);
//       });

//       document.querySelectorAll('.icon[alt="My Github profile"]').forEach((el) => {
//         el.setAttribute('alt', langData.profile['alt-socials']['alt-github']);
//       });
//     })
//     .catch((error) => console.error('Error loading languages:', error));
// }

// const defaultLanguage = getBrowserLanguage();
// changeLanguage(defaultLanguage);

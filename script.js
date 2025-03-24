let currentLanguage = 'en';
let translations = {};

// Load translations and initialize
async function initLanguage() {
  try {
    const response = await fetch('./languages.json');
    translations = await response.json();
    currentLanguage = localStorage.getItem('preferredLanguage') || navigator.language.split('-')[0];
    if (!translations[currentLanguage]) currentLanguage = 'en'; // Fallback
    applyLanguage(currentLanguage);
  } catch (error) {
    console.error("Error loading translations:", error);
  }
}

// Apply language to all elements
function applyLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('preferredLanguage', lang);
  const langData = translations[lang];

  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const keys = el.getAttribute('data-lang-key').split('.');
    let value = langData;
    keys.forEach(key => value = value?.[key]);
    if (value) el.textContent = value;
  });

  // Update alt texts for images
  document.querySelectorAll('img[data-lang-key]').forEach(img => {
    const keys = img.getAttribute('data-lang-key').split('.');
    let value = langData;
    keys.forEach(key => value = value?.[key]);
    if (value) img.setAttribute('alt', value);
  });
}

// Toggle language
function toggleLanguage(lang) {
  applyLanguage(lang);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  document.getElementById('lang-en').addEventListener('click', () => toggleLanguage('en'));
  document.getElementById('lang-pt').addEventListener('click', () => toggleLanguage('pt'));
  document.getElementById('lang-en-mobile').addEventListener('click', () => toggleLanguage('en'));
  document.getElementById('lang-pt-mobile').addEventListener('click', () => toggleLanguage('pt'));
});

// Hamburger menu (unchanged)
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}
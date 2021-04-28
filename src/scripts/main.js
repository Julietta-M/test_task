'use strict';

// theme changers

const page = document.querySelector('.page');

const themeLight = document.querySelector('.theme-light');
const themeDark = document.querySelector('.theme-dark');
const themeGray = document.querySelector('.theme-gray');

const themeLightButton = document.querySelector('.theme-light-button');
const themeDarkButton = document.querySelector('.theme-dark-button');
const themeGrayButton = document.querySelector('.theme-gray-button');

const selector = document.querySelector('.header__selector');

function lightTheme() {
  if (page.classList.contains('dark-theme')) {
    page.classList.remove('dark-theme');
  };

  if (page.classList.contains('medium-theme')) {
    page.classList.remove('medium-theme');
  };

  page.classList.add('light-theme');
}

function darkTheme() {
  if (page.classList.contains('light-theme')) {
    page.classList.remove('light-theme');
  };

  if (page.classList.contains('medium-theme')) {
    page.classList.remove('medium-theme');
  };

  page.classList.add('dark-theme');
}

function grayTheme() {
  if (page.classList.contains('light-theme')) {
    page.classList.remove('light-theme');
  };

  if (page.classList.contains('dark-theme')) {
    page.classList.remove('dark-theme');
  };

  page.classList.add('medium-theme');
}

// radio

themeLight.onclick = function() {
  lightTheme();
};

themeDark.onclick = function() {
  darkTheme();
};

themeGray.onclick = function() {
  grayTheme();
};

// buttons

themeLightButton.onclick = function() {
  lightTheme();
};

themeDarkButton.onclick = function() {
  darkTheme();
};

themeGrayButton.onclick = function() {
  grayTheme();
};

// selector

selector.onchange = function(event) {
  if (event.target.value === 'theme-light') {
    lightTheme();
  }

  if (event.target.value === 'theme-dark') {
    darkTheme();
  }

  if (event.target.value === 'theme-gray') {
    grayTheme();
  }
};

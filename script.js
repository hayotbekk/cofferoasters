// script.js

document.addEventListener('DOMContentLoaded', function () {
    var barsButton = document.querySelector('.bars');
    var navMenu = document.querySelector('.nav');
  
    barsButton.addEventListener('click', function () {
      this.classList.toggle('active'); // Toggle 'active' class on bars button
      navMenu.classList.toggle('active'); // Toggle 'active' class on nav menu
    });
  });
  
// Navbar
const hamburger = document.querySelector('.hamburger');
const navButtonsMobile = document.querySelector('.nav-buttons-mobile');
const lines = document.querySelectorAll('.line');

hamburger.addEventListener('click', () => {
    navButtonsMobile.classList.toggle('hidden-nav');
    lines[0].classList.toggle('close-1');
    lines[1].classList.toggle('close-2');
    lines[2].classList.toggle('close-3');
});




var popupDialog = document.getElementById('popupDialog');
var closeButton = document.getElementById('closeButton');

function openPopup() {
    // Show the popup dialog with a slow opening effect
    popupDialog.style.display = 'flex';
    popupDialog.style.opacity = '0';
    var opacity = 0;
    var interval = setInterval(function () {
        opacity += 0.1;
        popupDialog.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 50);
    popupDialog.style.pointerEvents = 'auto';
}

function closePopup() {
    // Close the popup dialog with a smooth closing effect
    var opacity = 1;
    var interval = setInterval(function () {
        opacity -= 0.1;
        popupDialog.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(interval);
            popupDialog.style.display = 'none';
            popupDialog.style.pointerEvents = 'none';
        }
    }, 50);
}

document.getElementById('learnMore').addEventListener('click', function () {
    openPopup();
});

closeButton.addEventListener('click', function () {
    closePopup();
});

window.addEventListener('click', function (event) {
    // Close the popup dialog if clicked outside of it with a smooth transition
    if (event.target == popupDialog) {
        closePopup();
    }
});
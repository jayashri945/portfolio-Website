document.addEventListener('DOMContentLoaded', function() {
    function showMoreProjects() {
        var hiddenProjects = document.querySelectorAll('.more-projects');
        hiddenProjects.forEach(function(project) {
            project.style.display = 'block';
        });
        var seeMoreButton = document.querySelector('.btn');
        if (seeMoreButton) {
            seeMoreButton.style.display = 'none';
        }
    }
    var seeMoreButton = document.querySelector('.btn');
    if (seeMoreButton) {
        seeMoreButton.addEventListener('click', showMoreProjects);
    }
});

function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}



const texts = [
    "FULL STACK DEVELOPER",
    "SPECILAIZED IN FRONTEND DEVELOPMENT",
    "UI/UX DESIGNER"
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50)
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

const modeButton = document.querySelectorAll('.Darkmodebox');
const modeButtonIcon = document.getElementById('modeicon');
const modeButtontext = document.getElementById('modetext');
const body = document.getElementById('body');
const mainbox = document.getElementById('mainbox');


let mode = 0;

const light=["#F5F5F5","#ffffff","#000000"]
const dark=["#37474F","#6bbc86","#ffffff"]


function modeSetting(mode) {
    if (mode === 0) {
        modeButtonIcon.src = "assets/light.svg";
        modeButtontext.innerHTML = 'Light';
        body.style.backgroundColor=light[0]
        mainbox.style.backgroundColor=light[1]
    } else {
        modeButtonIcon.src = "assets/night.png";
        modeButtontext.innerHTML = 'Dark';
        body.style.backgroundColor=dark[0]
        mainbox.style.backgroundColor=dark[1]
    }
}

modeButton.forEach(function (div) {
    div.addEventListener('click', function () {
        mode = 1 - mode; 
        modeSetting(mode);
    });
});

// Set initial mode
modeSetting(mode);
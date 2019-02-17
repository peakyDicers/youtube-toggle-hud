let list = [
    'ytp-chrome-top',
    'ytp-chrome-bottom',
    'ytp-gradient-bottom',
    'ytp-gradient-top',
    'ytp-progress-bar',
    'ytp-progress-bar-padding',
    'ytp-iv-player-content', //branding
    'iv-branding'
];

let hidden = false;

let hideHud = () => {
    list.forEach(item => {
        let element = document.getElementsByClassName(item);
        if (!element[0]) return;
        element[0].classList.add('hideMe');
    })
}
let unHideHud = () => {
    list.forEach(item => {
        let element = document.getElementsByClassName(item);
        if (!element[0]) return;
        element[0].classList.remove('hideMe');
    })
}

let createButton = () => {
    let btn = document.getElementById("shadow-gear-btn");
    if (btn) return;

    let toggleBtn = document.createElement("BUTTON");
    toggleBtn.id = "shadow-gear-btn"
    toggleBtn.classList.add('shadowGearBtn');

    let text = document.createTextNode("toggle shadow gear");
    toggleBtn.appendChild(text); 
    toggleBtn.addEventListener("click", toggle);
    
    if (element.length === 0) return;
    element[0].appendChild(toggleBtn);
}
setInterval(createButton, 5000);

let toggle = () => {
    if (hidden)
        unHideHud();
    else
        hideHud();
    hidden = !hidden;
}

chrome.runtime.onMessage.addListener(toggle);
/*
    peakyDicers
    Feb 17, 2019
*/

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

let toggle = () => {
    list.forEach(item => {
        let element = document.getElementsByClassName(item);
        if (!element[0]) return;
        if (hidden)
            element[0].classList.remove('hideMe');
        else
            element[0].classList.add('hideMe');
    });
    hidden = !hidden;
}

chrome.runtime.onMessage.addListener(toggle);
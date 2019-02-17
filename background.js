
let buttonClicked = (tab) => {
    chrome.tabs.sendMessage(tab.id, 'toggle')
    console.log('pressed')
}

chrome.browserAction.onClicked.addListener(buttonClicked);

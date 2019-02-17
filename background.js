let buttonClicked = (tab) => {
    chrome.tabs.sendMessage(tab.id, 'toggle')
}

chrome.browserAction.onClicked.addListener(buttonClicked);

var videoId, url;

url = 'https://kinoplayerapp.appspot.com/#/';

function listener(request, sender, sendResponse) {
	chrome.pageAction.show(sender.tab.id);
	videoId = request.videoId;
	console.log('videoId: ' + videoId);
	sendResponse(request);
}

chrome.extension.onMessage.addListener(listener);

chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.update(tab.id, {url: url + videoId });
});
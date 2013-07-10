var videoId, url;

url = 'https://googledrive.com/host/0B_3SNhsAHodsa0JmMXZxUURFcjg/index.html#/';

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
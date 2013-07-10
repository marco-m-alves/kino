$(function() {
	var $videos = $('video[data-youtube-id]');
	var videoId = $videos.attr('data-youtube-id');
	if (videoId) {
		chrome.extension.sendMessage({videoId: videoId}, function(response) {});
	}
});


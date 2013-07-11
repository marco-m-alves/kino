(function($){

	var Kino = {};

	Kino.getVideoId = function() {
		// First look for video tags
		var $videos = $('video[data-youtube-id]');
		var videoId = $videos.attr('data-youtube-id');

		// Then look for links
		if (!videoId) {
			$videos = $('a[href^="http://www.youtube.com/watch?v="]');
			var videoUrl = $videos.attr('href');
			if (videoUrl) {
				videoId = videoUrl.substring(videoUrl.indexOf('v=') + 2);	
			}
		}
		return videoId
	};

	Kino.notify = function(videoId) {
		if (videoId) {
			chrome.extension.sendMessage({videoId: videoId}, function(response) {});
		}
	};

	Kino.run = function() {
		var videoId = Kino.getVideoId();
		Kino.notify(videoId);
	};

	window.Kino = Kino;

	return Kino;
}(jQuery));


$(function() {
	Kino.run();
	$(document).bind('DOMSubtreeModified', function() {
		console.log('doc changed');
		Kino.run();
	});
});


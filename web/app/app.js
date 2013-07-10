var app = angular.module('plunker', []);

app.config(function($routeProvider){
	$routeProvider.when('/:videoId', {templateUrl: 'video-view.html', controller: 'MainCtrl'});
});


app.controller('MainCtrl', function($scope, $routeParams, VideoUrl, YouTube) {
	var videoId = $routeParams.videoId;
	$scope.videoId = videoId;
	$scope.videoData = YouTube.getVideoData(videoId);
});


app.service('YouTube', function($http){
  
  this.getVideoUrl = function(videoId){
    return 'https://gdata.youtube.com/feeds/api/videos/\{\{videoId\}\}?v=2&alt=jsonc&callback=JSON_CALLBACK'.replace(/{{videoId}}/, videoId);
  }
  
  this.getVideoData = function(videoId, callback){
    var url = this.getVideoUrl(videoId);
    return $http.jsonp(url).success(callback);
  };
});

app.service('VideoUrl', function(){
  var ytRe = /http\:\/\/www\.youtube\.com\/watch\?v=(.*)/;
  
  this.parse = function(videoIdCandidate){
    var match = ytRe.exec(videoIdCandidate);
    console.log(match);
    return match[1];
  };
  
});

var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('MyCtrl', ['$q','$http','$scope', 'Upload', '$timeout', function ($q,$http, $scope, Upload, $timeout) {
    
	// 1st approach to upload file on server
	/*$scope.uploadPic = function(file) {
    file.upload = Upload.upload({
      url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
      data: {username: $scope.username, file: file},
    });
	
    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
    }, function (response) {
      if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
    }*/
	
	// 2nd approach to upload file on server
	$scope.uploadPic = function(file) {
		var deferred = $q.defer();
		//console.log("FINE IT'S WORKING");
		url =  "https://angular-file-upload-cors-srv.appspot.com/upload" // add your server url 
		data =  {username: $scope.username, file: file};
		$http({method: 'POST', url:url, data:data}).then(function successCallback(response) {
            //console.log(response.data);
            deferred.resolve(response.data);
      }, function errorCallback(response) {
          deferred.reject(response);
      });
	}
}]);

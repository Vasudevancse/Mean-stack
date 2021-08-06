// Code goes here
var myApp = angular.module('myApp', []);
myApp.controller('photoController', ['$scope', '$http', function($scope, $http) {

  //Buttons Settings
  $scope.submit = true;
  $scope.update = false;
  $scope.cancel = false;
  $scope.Prev = true;
  $scope.Next = true;
  $scope.id=false;
  $scope.albumId = true;
  $scope.title = true;
  $scope.url = true;
  $scope.thumbnailUrl = true;

  //Getting Photos List
  //$http GET function
  //fetch(ULR).then(result=>result.json()).then(json=>console.log(json))
  $scope.startlimit=0;
  $scope.endlimit=10;
  $http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos?_start=' + $scope.startlimit + '&_limit=' + $scope.endlimit

  }).then(function successCallback(response) {

    $scope.photos = response.data;

  }, function errorCallback(response) {

    alert("Error. Try Again!");

  });

//get next records

	$scope.getNext = function() {
		$scope.startlimit = $scope.startlimit + 10;

		$http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos?_start=' + $scope.startlimit + '&_limit=' + $scope.endlimit

  }).then(function successCallback(response) {

    $scope.photos = response.data;

  }, function errorCallback(response) {

    alert("Error. Try Again!");

  });

	};

//get Prev records

	$scope.getPrev = function() {
		$scope.startlimit = $scope.startlimit - 10;
	
		$http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos?_start=' + $scope.startlimit + '&_limit=' + $scope.endlimit

  }).then(function successCallback(response) {

    $scope.photos = response.data;

  }, function errorCallback(response) {

    alert("Error. Try Again!");

  });


	};


  //Create New Photo
  $scope.addPhoto = function() {

    //$http POST function
    $http({

      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/photos',
      data: $scope.photo

    }).then(function successCallback(response) {

      $scope.photos.push(response.data);

      alert("Photo has added Successfully")
	$scope.photo = null;

    }, function errorCallback(response) {

      alert("Error. while created photo Try Again!");

    });

  };


  //Update Photo
  $scope.updatePhoto = function() {

    //$http PUT function
    $http({

      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/photos/' + $scope.photo.id,
      data: $scope.photo

    }).then(function successCallback(response) {
	
      alert("Photo has updated Successfully")
	

    }, function errorCallback(response) {

      alert("Error. while updating photo Try Again!");

    });
    
  };


  //Delete Photo
  $scope.deletePhoto = function(photo) {

    //$http DELETE function
    $http({

      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/photos/' + photo.id

    }).then(function successCallback(response) {

      alert("Photo has deleted Successfully");
      var index = $scope.photos.indexOf(photo);
      $scope.photos.splice(index, 1);

    }, function errorCallback(response) {

      alert("Error. while deleting photo Try Again!");

    });

  };

  //Set $scope on Edit button click
  $scope.editPhoto = function(photo) {
    $scope.submit = false;
    $scope.update = true;
    $scope.cancel = true;
    $scope.photo = photo;
  };


  //cancel Update
  $scope.cancelUpdate = function() {
    $scope.photo = null;
    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    
  };

  //////////////////Shortcut methods for $http//////

  //$http GET
  //$http.get('https://jsonplaceholder.typicode.com/users', function successCallback(response) {
  //
  //  alert("User has updated Successfully")
  //
  //}, function errorCallback(response) {
  //
  //  alert("Error. while updating user Try Again!");
  //
  //});


  //$http POST
  //$http.post('https://jsonplaceholder.typicode.com/users', $scope.user, function successCallback(response) {
  //
  //  $scope.users.push(response.data);
  //alert("User has created Successfully")
  //
  //}, function errorCallback(response) {
  //
  //  alert("Error. while created user Try Again!");
  //
  //});


  //$http PUT
  //$htp.put('https://jsonplaceholder.typicode.com/users/' + $scope.user.id, $scope.user, function successCallback(response) {
  //
  //  alert("User has updated Successfully")
  //
  //}, function errorCallback(response) {
  //
  //  alert("Error. while updating user Try Again!");
  //
  //});


  //$http DELETE
  //$http.delete('https://jsonplaceholder.typicode.com/users/' + user.id, function successCallback(response) {
  //
  //  alert("User has deleted Successfully");
  //var index = $scope.users.indexOf(user);
  //$scope.users.splice(index, 1);
  //
  //  }, function errorCallback(response) {
  //
  //  alert("Error. while deleting user Try Again!");
  //
  //  });


}]);
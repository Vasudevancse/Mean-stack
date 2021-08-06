angular.module('nIPLScoresModule',[])
.controller('nIPLScoresController', ['$scope', function($scope){
	var iplscores = [    
    	{player:'MS Dhoni', team:'CSK', season:2020, runs:350, wickets:0},
        {player:'Virat', team:'RCB', season:2020, runs:450, wickets:3},
        {player:'Rohit', team:'MI', season:2020, runs:480, wickets:1},
    	{player:'Bumeah', team:'MI', season:2020, runs:80, wickets:15},
        {player:'Warner', team:'SRH', season:2020, runs:430, wickets:2},
    ];
    
     $scope.propertyName = 'wickets';
  	$scope.reverse = true;
  	$scope.iplscores = iplscores;
    
    $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };  

}]);
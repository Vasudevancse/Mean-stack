var app = angular.module('watchDemo', []);
app.controller('watchDemoCtrl', ['$scope', function($scope){
  function clone(obj) {
      return JSON.parse(JSON.stringify(obj));
  }
  
  $scope.letters = ['A','B','C'];
  var defaultObj = Object.freeze({
    'a': 1,
    'b': {
      'ba': {
        'bab': 2
      },
      'bb': [
        {
          'bb1a': 3,
          'bb1b': 4
        },
        {
          'bb2a': 5
        }
      ]
    }
  });
  
  //Clone defaultObj to preserve it
  $scope.obj = clone(defaultObj);

  $scope.$watch('letters', function (newValue, oldValue) {
    $scope.msg = {
      time: Date.now(), 
      content: JSON.stringify($scope.letters)
    };
  });

    $scope.$watch('letters', function (newValue, oldValue) {
    $scope.msg2 = {
      time: Date.now(), 
      content: JSON.stringify($scope.letters)
    };
  }, true);

    $scope.$watch('letters[3]', function (newValue, oldValue) {
    $scope.msg3 = {
      time: Date.now(), 
      content: oldValue  + ' -> ' + newValue
    };
  }, false);

    $scope.$watch('obj["a"]', function (newValue, oldValue) {
    $scope.msgObj1 = {
      time: Date.now(),
      content: $scope.obj['a']
    };
  }, false);  
  
    $scope.$watch('obj["b"]', function (newValue, oldValue) {
    $scope.msgObj2 = {
      time: Date.now(),
      content: JSON.stringify($scope.obj['b'])
    };
  }, true);
  
  $scope.push = function (letter) {
    $scope.letters.push(letter);
  };
  
  $scope.unshift = function (letter) {
    $scope.letters.unshift(letter);
  };
  
  $scope.replace = function (letter) {
    $scope.letters[0] = letter;
  }
  
  $scope.reset = function () {
    $scope.letters = ['A', 'B', 'C'];
  }
  
  $scope.resetObj = function () {
    $scope.obj = clone(defaultObj);
  }
  
  $scope.objReplace = function (key) {
    var val = Math.round(Math.random() * 10);
    switch (key) {
      case 'a':
        $scope.obj.a = val;
        break;
      case 'b.ba':
        $scope.obj.b.ba = val;
        break;
      case 'b.ba.bab':
        $scope.obj.b.ba.bab = val;
        break;
      case 'b.bb.0.bb1b':
        $scope.obj.b.bb[0].bb1b = val;
        break;
    }
  }
}]);
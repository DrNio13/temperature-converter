// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngRoute'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  })
  .when('/celsius',{
    templateUrl: 'partials/celsius.html',
    controller: 'CelsiusController'
  })
  .when('/fahrenheit',{
    templateUrl: 'partials/fahrenheit.html',
    controller: 'FahrenheitController'
  })
  .when('/kelvin',{
    templateUrl: 'partials/kelvin.html',
    controller: 'KelvinController'
  })
  .otherwise({
    redirectTo: '/'
  })
  
})

.controller('TemperatureController', ['$scope', '$rootScope', '$location',function($scope, $rootScope, $location){
  
  $scope.noValue = false;
  $rootScope.redirectHome = false;
  $scope.unit;

  $scope.redirect = function(path){
    $rootScope.redirectHome = false;
    $location.path(path);
  };

  $scope.toggleMenu = function() {
    var navigationOpened = true;
  };

}])

.controller('HomeController', ['$scope', function($scope){
  //
}])

.controller('CelsiusController', ['$scope', '$rootScope', function($scope , $rootScope){
  
  $rootScope.redirectHome = true;

  $scope.fahrenheit = function(){
    
    $scope.noValue = false;
    var result;

    if ($scope.CelsiusForm.celsius.$dirty && $scope.celsius !== '') {
      result = parseInt($scope.celsius) * 9/5 + 32; 
      $scope.unit = '&#8457;';
    }

    if(isNaN(result)){
      $scope.noValue = true;
    }    

    return result;

  };

  $scope.kelvin = function(){
    $scope.noValue = false;
    var result;

    if ($scope.CelsiusForm.celsius.$dirty && $scope.celsius !== '') {
      result = parseInt($scope.celsius) + 273.15; 
      $scope.unit = '&#8490;';       
    }

    if(isNaN(result)){
      $scope.noValue = true;
    }
    
    return result;

  };

}])

.controller('FahrenheitController', ['$scope', '$rootScope', '$log', function($scope, $rootScope, $log){
  
  $rootScope.redirectHome = true;

  $scope.celsius = function(){
    $scope.noValue = false;
    var result;

    if ($scope.FahrenheitForm.fahrenheit.$dirty && $scope.fahrenheit !== '') {
      result = parseInt($scope.fahrenheit - 32) * 5/9 ; 
      $scope.unit = '&#8451;';
    }
    
    if(isNaN(result)){
        $scope.noValue = true;
    }

    return parseFloat(result).toFixed(2);
  };

  $scope.kelvin = function(){
    $scope.noValue = false;
    var result;

    if ($scope.FahrenheitForm.fahrenheit.$dirty && $scope.fahrenheit !== '' ) {
      result = parseInt($scope.fahrenheit - 32 ) * 5/9 + 273.15;  
      $scope.unit = '&#8490;';  
    }  
      
    if(isNaN(result)){
        $scope.noValue = true;
    }
    
    return parseFloat(result).toFixed(2);  
    
  };

}])

.controller('KelvinController', ['$scope', '$rootScope', function($scope, $rootScope){
  
  $rootScope.redirectHome = true;

  $scope.celsius = function(){
    $scope.noValue = false;
    var result;

    if ($scope.KelvinForm.kelvin.$dirty && $scope.kelvin !== '') {
      result = parseInt($scope.kelvin) - 273.15; 
      $scope.unit = '&#8451;'; 
    }

    if(isNaN(result)){
      $scope.noValue = true;
    }

    return parseFloat(result).toFixed(2);

  };

  $scope.fahrenheit = function(){
    $scope.noValue = false;
    var result;

    if ($scope.KelvinForm.kelvin.$dirty && $scope.kelvin !== '') {
      result = parseInt($scope.kelvin - 237.15 ) * 9/5 + 32;
      $scope.unit = '&#8457;';    
    }

    if(isNaN(result)){
        $scope.noValue = true;
    }

    return parseFloat(result).toFixed(2);

  };

}]);
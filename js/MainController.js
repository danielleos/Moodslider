angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('device', 'img/icons/sets/device-icons.svg', 24);
  })
.controller('MainController', function($scope) {

	$scope.mood1 = 85;
	$scope.mood2 = 40;
	$scope.mood3 = 25;
	$scope.mood4 = 75;

});

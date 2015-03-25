angular.module('晋城银行').config([ '$routeProvider', 
function ($routeProvider) {
  
  $routeProvider.when('/exampleRoute', {
    templateUrl: 'app/exampleRoute/exampleRoute.html',
    controller: 'exampleRoute',
    controllerAs: 'exampleRoute' 
  });

}]);

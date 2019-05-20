var app = angular.module('main', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../partials/form.html',
        controller: 'savePessoa'
    })
    .when('/pessoa/listar', {
        templateUrl: '../partials/list.html',
        controller: 'listController'
    })
    .otherwise({redirectTo: '/'});
}]);

//Inicializando do escopo global
app.run(['$rootScope', function($rootScope) {
  console.debug('app.run');
}]);

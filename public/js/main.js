var app = angular.module('main', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../partials/form.html',
        controller: 'savePessoaController'
    })
    .when('/pessoa/listar5049165418', {
        templateUrl: '../partials/list.html',
        controller: 'listarPessoaController'
    })
    .when('/pessoa/listareditar9518457532', {
        templateUrl: '../partials/list-edit.html',
        controller: 'listarPessoaController'
    })
    .otherwise({redirectTo: '/'});
}]);

//Inicializando do escopo global
app.run(['$rootScope', function($rootScope) {
  console.debug('app.run');
}]);

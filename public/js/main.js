var app = angular.module('main', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../partials/list.html',
        controller: 'listController'
    })
    .when('/pessoa/form/', {
        templateUrl: '../partials/form.html',
        controller: 'savePessoa'
    })
    .when('/pessoa/form/:id', {
        templateUrl: '../partials/form.html',
        controller: 'editPessoa'
    })
    .when('/pessoa/remove/:id', {
        templateUrl: '../partials/list.html',
        controller: 'removePessoa'
    })
    .otherwise({redirectTo: '/'});
}]);

//Inicializando do escopo global
app.run(['$rootScope', function($rootScope) {
  console.debug('app.run');
}]);

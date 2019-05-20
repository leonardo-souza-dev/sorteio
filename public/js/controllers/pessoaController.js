var app = angular.module('main');

app.controller('listController', function($scope, $location, pessoaService) {
	$scope.title = 'Lista de Pessoas';
	pessoaService.get({}, function(pessoas) {
    $scope.pessoas = pessoas;
  });

  $scope.remove = function(id, index) {
    pessoaService.remove(id);
    $scope.pessoas.splice(index, 1);
  };

});

app.controller('savePessoa', function($scope, pessoaService) {
    $scope.title = 'Cadastro de pessoas';
		var pessoaCadastro = pessoaService.save();

    $scope.save = function() {
      $scope.triedSubmit = true;
      $scope.isSave = false;
      $scope.isError = false;

  		if($scope.pessoa.nome && $scope.pessoa.email){
  	    pessoaCadastro.pessoa = $scope.pessoa;
        pessoaCadastro.$save();
  	    $scope.isSave = true;
        $scope.message = 'Cadastro efetuado';
  		}else{
  			$scope.isError = true;
        $scope.message = 'Erro ao cadastrar ' + $scope.pessoa.nome;
  		}
    };
});

app.controller('editPessoa', function($scope, $routeParams,  $resource, pessoaService) {
  $scope.title = 'Atualizar pessoas';
  var PessoaResource = $resource('/pessoa/busca/:id');
  PessoaResource.get({id: $routeParams.id}, function(res) {
    //res.preco = res.preco.toString().replace('.', ',');
    $scope.pessoa = res;
  });


  pessoaResource = pessoaService.set();
  $scope.save = function() {
    $scope.triedSubmit = true;
    if($scope.pessoa.nome && $scope.pessoa.email){
      pessoaResource.pessoa = $scope.pessoa;
      pessoaResource.$save();

      $scope.isSave = true;
      $scope.message = $scope.pessoa.nome + ' atualizada com sucesso.';
    }else{
      $scope.isError = true;
      $scope.message = 'Erro ao fazer atualização da ' + $scope.pessoa.nome;
    }
  };
});

app.controller('removePessoa', function($scope, $routeParams, $resource, $location) {

});

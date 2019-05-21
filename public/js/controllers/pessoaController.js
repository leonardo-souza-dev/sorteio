var app = angular.module('main');

app.controller('listarPessoaController', function($scope, $location, pessoaService) {
  $scope.title = 'Lista de Pessoas';

  $scope.selectedAll = false;

  $scope.selectAll = function() {
    $scope.selectedAll = !$scope.selectedAll;
    angular.forEach($scope.pessoas, function(item) {
      item.selected = $scope.selectedAll;
    });
  };

  // use the array "every" function to test if ALL items are checked
  $scope.checkIfAllSelected = function(pessoa) {
    pessoa.selected = !pessoa.selected;
    $scope.selectedAll = $scope.pessoas.every(function(item) {
      return item.selected == true;
    })
  };
  
	pessoaService.get({}, function(pessoas) {
    $scope.pessoas = pessoas;
  });

  $scope.remove = function(id, index) {
    pessoaService.remove(id);
    $scope.pessoas.splice(index, 1);
  };

  $scope.deletar = function(){
    var idsDelete = [];
    angular.forEach($scope.pessoas, function(value, key) {
      if (value.selected) {
        idsDelete.push({id:value._id, key: key});
      }
    });
    var spliceIndex = 0;
    idsDelete = idsDelete.sort(function (a, b) {  return a.key - b.key;  });
    angular.forEach(idsDelete, function(v,k){
      pessoaService.remove(v.id);
      $scope.pessoas.splice(v.key - spliceIndex, 1);
      spliceIndex++;
    })
  };
});

app.controller('sorteiaPessoaController', function($scope, $routeParams, $resource, $location, pessoaService) {
  $scope.realizaSorteio = function(){
    pessoaService.sorteia({}, function(pessoas) {
      $scope.pessoaSorteada = { nome:"Leonardo", email: "leo@mgail.com"} 
      //$scope.pessoas = pessoas;
    }); 
  };
});

app.controller('savePessoaController', function($scope, pessoaService) {
    $scope.title = 'Cadastro de pessoas';
    var pessoaCadastro = pessoaService.save();
    $scope.saveDisable = false;

    $scope.save = function() {
      $scope.triedSubmit = true;
      $scope.isSave = false;
      $scope.isError = false;

  		if($scope.pessoa.nome && $scope.pessoa.email){
  	    pessoaCadastro.pessoa = $scope.pessoa;
        pessoaCadastro.$save();
  	    $scope.isSave = true;
        $scope.message = 'Cadastro efetuado';
        $scope.saveDisable = true;
  		}else{
  			$scope.isError = true;
        $scope.message = 'Erro ao cadastrar ' + $scope.pessoa.nome;
  		}
    };
});

app.controller('editarPessoaController', function($scope, $routeParams,  $resource, pessoaService) {
  $scope.title = 'Atualizar pessoas';
  var PessoaResource = $resource('/pessoa/busca/:id');
  PessoaResource.get({id: $routeParams.id}, function(res) {
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

  $scope.removerPessoas = function(){

  };
});

app.controller('removerPessoaController', function($scope, $routeParams, $resource, $location) {

});

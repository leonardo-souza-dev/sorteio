angular.module('main').factory('pessoaService', function($resource, $routeParams) {

  function _save() {
    var PessoaResource = $resource('/pessoa/cadastro');

    return new PessoaResource();
  };

  function _set() {
    var PessoaResource = $resource('/pessoa/edita');
    return new PessoaResource();
  };

  function _get(query, callback) {
    var PessoaResource = $resource('/pessoa/busca');
    var res = PessoaResource.query();
    return callback(res);
  };

  function _sorteia() {
    var PessoaResource = $resource('/pessoa/sorteia');
    var res = PessoaResource.query();
    return callback(res);
  };

  function _remove(_id) {
    debugger;
    var PessoaResource = $resource('/pessoa/removeLogico/:id');
    // var pessoaResource = new PessoaResource();
    // pessoaResource._id = _id;
    // pessoaResource.$remove();

    PessoaResource.delete({id:_id}, function(res){
      var asdasd = 2;
    });
  };

  return {
    save: _save,
    set: _set,
    get: _get,
    remove: _remove,
    sorteia: _sorteia
  };
});

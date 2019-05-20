angular.module('main').factory('pessoaService', function($resource) {

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

  return {
    save: _save,
    set: _set,
    get: _get,
    sorteia: _sorteia
  };
});

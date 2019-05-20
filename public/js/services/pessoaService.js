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

  function _remove(_id) {
    var PessoaResource = $resource('/pessoa/removeLogico'),
    pessoaResource = new PessoaResource();
    pessoaResource.pessoa = _id;
    pessoaResource.$remove();
  };

  return {
    save: _save,
    set: _set,
    get: _get,
    remove: _remove
  };
});

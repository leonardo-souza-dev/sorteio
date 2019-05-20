module.exports = function(app) {
  var controller = app.controllers.pessoa;

  app.post('/pessoa/cadastro', controller.postAddPessoa);
  app.get('/pessoa/busca', controller.getAllPessoas);
  app.get('/pessoa/busca/:id', controller.getOnePessoa);
  app.post('/pessoa/edita', controller.postUpdatePessoa);
  app.delete('/pessoa/removeLogico', controller.removeLogicalPessoa);
};

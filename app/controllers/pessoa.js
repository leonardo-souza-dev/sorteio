module.exports = function(app) {
  var Schema = app.models.pessoa,
  pessoa = require('../models/mongoose.js')(Schema);

  var HomeController = {
    postAddPessoa: function(req, res) {
      var doc = {
        nome: req.body.pessoa.nome,
        email: req.body.pessoa.email
      };
      console.log('LOG SAVE PESSOA', doc);

      pessoa.save(doc, function(err, res) {
        console.log(err);
        if(err) throw err;

        console.log('DOCUMENTO INSERIDO COM SUCESSO!\n', res);
      });
    },

    getAllPessoas: function(req, res) {
      pessoa.find({ativo:true}, function(err, doc) {
        console.log(doc);
        console.log(err);
        if(err) throw err;
        res.json(doc);
      });
    },

    getOnePessoa: function(req, res) {
      pessoa.findOne({_id: req.params.id}, function(err, doc) {
        if(err) throw err;
        res.json(doc);
      });
    },

    postUpdatePessoa: function(req, res) {
      var idDoc = req.body.pessoa._id,
          doc = {
            nome: req.body.pessoa.nome,
            email: req.body.pessoa.email
          };

          pessoa.update({_id: idDoc}, doc, function(err, res) {
        if(err) throw err;
        console.log('PESSOA ATUALIZADA COM SUCESSO!\n', res)
      });
    },

    removeLogicalPessoa: function(req, res) {
      var _id = req.body.pessoa;
      pessoa.removeLogical(_id, function(err, res) {
        if(err) throw err;
        console.log('PESSOA REMOVIDA COM SUCESSO!\n', res);
      });
    },

    sorteiaPessoa: function(req, res) {
      debugger;
      pessoa.find({ativo:true}, function(err, doc) {

        if(err) throw err;
        res.json(doc[0]);
      });
    }


  };

    return HomeController;
}

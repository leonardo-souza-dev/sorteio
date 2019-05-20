module.exports = function(Model) {

  var Mongoose = {

    save: function(doc, callback) {
      console.log('salvando doc');
      console.log(doc);

      pessoa = new Model(doc);
      pessoa.save()
        .then(function(res) {
          callback(undefined, res)
        }, function(err) {
          callback(new Error('Erro ao cadastrar o documento:\n', err))
        });
    },

    find: function(query, callback) {
      Model.find(query).exec()
        .then(function(doc) {
          callback(undefined, doc);
        }, function(err) {
          callback(new Error('Erro ao buscar o documento:\n' + err));
        });
    },

    findOne: function(query, callback) {
      Model.findOne(query).exec()
        .then(function(doc) {
          callback(undefined, doc);
        }, function(err) {
          callback(new Error('Erro ao buscar o documento:\n' + err));
        });
    },

    update: function(query, doc, callback) {
      Model.update(query, {$set: doc})
        .then(function(res) {
          callback(undefined, res);
        }, function(err) {
          callback(new Error('Error ao fazer atualização do doc:\n', err));
        });
    },

    removeLogical: function(_id, callback) {
      
      console.log('_id - REMOVE LOGICAL');
      console.log(_id);

      Model.update({_id: _id}, {$set: {ativo: false}})
        .then(function(res) {
          console.log('callback de SUCESSO do update do mongoose');
          callback(undefined, res);
        }, function(err) {
          console.log('callback de ERRO do update do mongoose');
          callback(new Error('Erro ao remover logicamente o documento:\n', err));
        });
    }
  };
  //fim do objeto

  return Mongoose;
};

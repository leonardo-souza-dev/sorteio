var mongoose = require('mongoose');
module.exports = function() {
  var pessoasSchema,
    collectionName = 'pessoa';

  pessoasSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true,
      index:{
        unique: true
      }
    },
    email: {
      type: String,
      required: true
    },
    ativo: {
      type: Boolean,
      default: true
    }
  });

  return mongoose.model(collectionName, pessoasSchema);
};

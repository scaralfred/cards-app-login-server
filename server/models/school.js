var mongoose = require('mongoose');

var School = mongoose.model('School', {
  classSettings: {
    type: Object,
    required: true
  },
  _creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
  }
});

module.exports = {Todo};

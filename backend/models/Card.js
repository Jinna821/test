const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const CardSchema = new mongoose.Schema({
  card_id: { type: Number, unique: true },
  campname: { type: String, required: true },
  leftnavtitle: { type: String, required: true },
  pageheader: { type: String, required: true },
  firstname: { type: String, required: true },
  videotitle: { type: String, required: true },
  videolink: { type: String, required: true },
  btnonetxt: { type: String, required: true },
  btnonelink: { type: String, required: true },
  btntwotxt: { type: String, required: true },
  btntwolink: { type: String, required: true },
  headertxt: { type: String, required: true },
  headerlink: { type: String, required: true },
  created_at: { type: String, required: true },
  leads: {type:String, default:'VVQQ'},
});

CardSchema.plugin(AutoIncrement, { inc_field: 'card_id' });

module.exports = mongoose.model('Card', CardSchema);
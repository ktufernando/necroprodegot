var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var personajeSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    img: { type: String, required: [true, 'La imagen es necesaria'] },
    valor: { type: Number, required: [true, 'El valor es necesario'] },
    grupo: { type: String, required:  [true, 'El grupo es necesario'] },
    muerto: { type: Boolean, default: false},
    fechaMuerte: { type: Date}
});


module.exports = mongoose.model('Personaje', personajeSchema);
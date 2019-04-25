const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let seleccionSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: [true, 'El usuario es obligatorio'] },
    seleccion: { type: Array, required: [true, 'La selección es obligatoria'] },
});


module.exports = mongoose.model('Seleccion', seleccionSchema);
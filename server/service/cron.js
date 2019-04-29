const CronJob = require('cron').CronJob;
let Personaje = require('../models/personaje');
const Usuario = require('../models/usuario');
let Seleccion = require('../models/seleccion');

let cron = new CronJob('* * * * *', async() => {
    console.log('******************** Start Cron *********************');
    try{
        let usuarios = await getUsuarios();
        for(let i = 0; i < usuarios.length; i++){
            let u = usuarios[i];
            let aciertos = 0;
            let puntos = 0;
            let seleccion = await getSeleccion(u._id);
            if(seleccion && seleccion.length){
                if(seleccion[0].seleccion && seleccion[0].seleccion.length){
                    for(let j = 0; j < seleccion[0].seleccion.length; j++){
                        let s = seleccion[0].seleccion[j];
                        let personaje = await getPersonaje(s);
                        if(personaje.muerto){
                            aciertos = aciertos + 1;
                            puntos = puntos + personaje.valor;
                        }
                    }
                    u.aciertos = aciertos;
                    u.puntos = puntos
                    u.save();
                } 
            }  
        }
    } catch (e) {
        console.log(e);
    }
}, null, true, 'America/Argentina/Buenos_Aires');

let getPersonaje = async(id) => {
    return await Personaje.findById(id).exec();
}
let getUsuarios = async() => {
    return await Usuario.find({}).exec();
}
let getUsuario = async(id) => {
    return await Usuario.findById(id).exec();
}
let getSeleccion = async(userId) => {
    return await Seleccion.find({usuario: userId}).exec();
}

module.exports = {
    cron
}
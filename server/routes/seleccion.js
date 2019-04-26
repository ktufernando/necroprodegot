const express = require('express');


let app = express();
let Seleccion = require('../models/seleccion');
let Personaje = require('../models/personaje');


// ===========================
//  Obtener selecciones
// ===========================
app.get('/seleccion/:usuario', (req, res) => {
    Seleccion.find({usuario: req.params.usuario})
        .exec((err, selecciones) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            let s = selecciones[0] ? selecciones[0].seleccion : [];

            res.json({
                ok: true,
                selecciones: s
            });


        })

});

let getNames = (selecciones) => {
    return new Promise((resolve, reject )=>{
        let filter = [];
        for(let i = 0; i < selecciones.length; i++){
           filter.push(selecciones[i]);
        };
        Personaje.find({'_id': { $in: filter}}, 'nombre').exec((err, r) => {
            resolve(r);
        });
    });
};

app.get('/seleccion/:usuario/personajes', (req, res) => {
    Seleccion.find({usuario: req.params.usuario})
        .exec((err, selecciones) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            let s = selecciones[0] ? selecciones[0].seleccion : [];
            getNames(s).then((response) => {
                res.json({
                    ok: true,
                    selecciones: response
                });
            });



        })

});


app.post('/seleccion', (req, res) => {

    let body = req.body;
    
    Seleccion.find({usuario: body.usuario}, (err, seleccionDB) => {

        
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }



        let sel;

        if (!seleccionDB || !seleccionDB.length ) {
            
            sel = new Seleccion({
                usuario: body.usuario,
                seleccion: []
            });
            if(!body.desseleccionado){
                sel.seleccion.push(body.seleccion);
            }
            
        }else {
            if(!body.desseleccionado){
                if(seleccionDB[0].seleccion.length >= 5){
                    return res.status(500).json({
                        ok: false,
                        err: 'No podes seleccionar más de 5 personajes'
                    });
                }
                sel = seleccionDB[0];
                sel.seleccion.push(body.seleccion);
            }else{
                if(seleccionDB[0].seleccion && seleccionDB[0].seleccion.length > 0){
                    sel = seleccionDB[0];
                    function removeItemFromArr ( arr, item ) {
                        var i = arr.indexOf( item );
                    
                        if ( i !== -1 ) {
                            arr.splice( i, 1 );
                        }
                    }
                    removeItemFromArr( sel.seleccion, body.seleccion );
                }
            }
        }
        
        if(sel){
            sel.save((err, seleccionDB2) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }

                res.status(201).json({
                    ok: true,
                    seleccion: seleccionDB2
                });

            });
        }
    });

});


module.exports = app;
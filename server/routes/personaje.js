const express = require('express');

let app = express();

let Personaje = require('../models/personaje');

// ============================
// Mostrar todas las personajes
// ============================
app.get('/personaje', (req, res) => {

    Personaje.find({})
        .sort('grupo nombre')
        .exec((err, personajes) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                personajes
            });

        })
});


module.exports = app;
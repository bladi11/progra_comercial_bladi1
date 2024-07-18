// ComunicacionMongo.js
// esta mal

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComunicacionMongoSchema = mongoose.Schema({
    monto_pagado: {
        type: Number,
        required: true
    },
    fecha_pago: {
        type: Date,
        required: true
    },
    correlativo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ComunicacionMongo', ComunicacionMongoSchema);

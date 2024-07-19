// comunicacionController.js
//esta en en put

const axios = require('axios');

exports.enviarDatosAMongo = async (req, res) => {
    try {
        // Obtener los datos a enviar desde la solicitud
        const { monto_pagado, fecha_pago, correlativo } = req.body;

        // Hacer la solicitud a la API de MongoDB para guardar los datos
        const response = await axios.post('http://localhost:5000/guardar-informacion', {
            monto_pagado,
            fecha_pago,
            correlativo
        });

        // Si la solicitud fue exitosa, devolver la respuesta
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error al enviar datos a MongoDB:', error);
        res.status(500).json({ error: 'Error al enviar datos a MongoDB' });
    }
};

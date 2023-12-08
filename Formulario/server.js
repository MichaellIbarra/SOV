import express from 'express';
import { insertar_registro, consultar_tabla } from './db.js';
import path from 'path';


app.listen('3000', function () {
    console.log('fue conexion');
});

app.use(express.static('frontend'));

app.get('/', function (peticion, respuesta) {
    respuesta.sendFile(path.join(__dirname + 'frontend/login.html'));
});

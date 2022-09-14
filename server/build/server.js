// const express = require('express'); using a 'commomJs' type
// utilizando o module type e modificando a extensão para 'module' js (mjs) <- 'ES2020'
import express from "express";
//aplicação baseada em express
const app = express();
// especificando a rota com 'app.get'
app.get('/ads', (request, response) => {
    console.log('Acessou ads!');
    return response.json([
        { id: 1, name: 'Anúncio 1', },
        { id: 2, name: 'Anúncio 2', },
        { id: 3, name: 'Anúncio 3', },
        { id: 4, name: 'Anúncio 4', },
    ]);
});
app.listen(3333);

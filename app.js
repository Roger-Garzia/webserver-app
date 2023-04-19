const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;


// --------------require Handle Bars-----------------------
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// ------- Servir Contenido Estatico --------------
app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.render('home', {
        titulo: 'Curso Node',
        nombre: 'Roger Garzia'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        titulo: 'Curso Node',
        nombre: 'Roger Garzia'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        titulo: 'Curso Node',
        nombre: 'Roger Garzia'
    });
});

app.get('*', (req, res) => {
    res.send('Recurso solicitado no existente');
});

/* app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/back/template/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/back/template/elements.html');
}); */

app.listen(PORT, () => {
    console.log(`Listen on PORT ${PORT}`);
});
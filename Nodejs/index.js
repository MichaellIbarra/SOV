const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) =>{
    res.send('Conociendo Nodejs');
    //res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () =>{
    console.log(`Servidor escuchando en http://localhost:${port}`)
});
const mysql = require('mysql');

const conex = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'sakila'
});

conex.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log('conexion exitosa');
    }
});

conex.end();
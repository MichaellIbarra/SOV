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

//MOSTRAR
// conex.query('SELECT  * FROM actor', function(err,result, fields){
//     if(err) throw err;
//     result.forEach(result => {
//         console.log(result);
//     });
// });

// INSERTAR
/* conex.query('INSERT INTO actor (first_name, last_name) VALUES ("MICHAELL","IBARRA")', (err,result)=>{
    if(err) throw err;
    console.log('Registrado Agregado', result)
}); */

// ACTUALIZAR
/* conex.query('UPDATE actor SET first_name = "Matichelo", last_name = "Martinez" WHERE actor_id=1 ', (err,result)=>{
    if(err) throw err;
    console.log('Registrado Actualizado', result)
}) */

// ELIMINAR
/* conex.query('DELETE FROM actor WHERE actor_id=1 ', (err,result)=>{
    if(err) throw err;
    console.log('Registrado Eliminado', result)
}) */
conex.end();
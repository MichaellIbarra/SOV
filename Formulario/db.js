import mysql from 'mysql';
var conexion = mysql.createConnection(
    {
        host: 'localhost',
        database: 'base_datos',
        user: 'root',
        password: ''
    }
);

conexion.connect(function (err) {
    if (err) { throw err; } else {
        console.log('conexion exitosa');
    }

})

function insertar_registro() {
    conexion.query("INSERT INTO usuarios(Nombre, Apellido, Telefono, Correo, Contrasena) VALUES ('Michaell', 'Ibarra', '987654321', 'michaell@gamil.com', '1717')", function (error, resultados) {
        if (error) {
            throw error;
        }
        else {
            console.log("Registro exitoso");
        }
    }
    );
}

function consultar_tabla() {
    conexion.query("SELECT * FROM usuarios", function (err, resultados) {
        if (err) { throw err; } else {
            for (let i = 0; i < resultados.length; i++) {
                console.log(resultados[i].IdUsuario + ' ' + resultados[i].Nombre);
            }
        }
    });
}


export{insertar_registro, consultar_tabla};
const mysql = require('mysql');

const configMysql = {
    connectionLimit: 10,
    host: '192.168.0.45',
    port: '3306',
    user: 'root',
    password: 'userpass',
    database: 'smart_home'
}

const pool = mysql.createPool(configMysql);

pool.getConnection((err, connection) => {
    if (err) {
        switch (err.code) {
            case 'PROTOCOL_CONNECTION_LOST':
                console.error('La conexion a la DB se cerró.');
                break;
            case 'ER_CON_COUNT_ERROR':
                console.error('La base de datos tiene muchas conexiones');
                break;
            case 'ECONNREFUSED':
                console.error('La conexion fue rechazada');
        }
        if (connection) {
            console.log(connection)
            connection.release();
        }
        return;
    }
});

module.exports = pool;
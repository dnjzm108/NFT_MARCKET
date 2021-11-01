const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nft',
    connectionLimit: 100
})

function query(sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) reject(error);
            connection.query(sql, (error, results, fields) => {
                if (error) reject(error)
                if (results === undefined) reject('error');
                resolve(results);
                connection.release();
            })
        })
    })
}


module.exports = {
    pool,
    query
}

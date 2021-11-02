const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nft',
    connectionLimit: 100
})


async function query(sql,params){
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const [result] = await connection.execute(sql, params)
            return result
        } catch (error) {
            console.log('Query Error');
            console.log(error)
            return error
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        return error
    } finally {
        connection.release();
    }
}


// function query(sql) {
//     return new Promise((resolve, reject) => {
//         pool.getConnection((error, connection) => {
//             if (error) reject(error);
//             connection.query(sql, (error, results, fields) => {
//                 if (error) reject(error)
//                 if (results === undefined) reject('error');
//                 resolve(results);
//                 connection.release();
//             })
//         })
//     })
// }


async function execute(sql,params){
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const [result] = await connection.execute(sql, params)
            return result
        } catch (error) {
            console.log('Query Error');
            console.log(error)
            return error
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        return error
    } finally {
        connection.release();
    }
}



module.exports = {
    pool,
    query,
    execute
}

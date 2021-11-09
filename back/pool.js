const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'nft_market',
    multipleStatements: true,
    connectionLimit: 100
})


async function query(sql){
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const [result] = await connection.query(sql);
            return result
        } catch (error) {
            console.log('Query Error');
            console.log(error)
            return false;
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        return false;
    } finally {
        connection.release();
    }
}


async function execute(sql, params) {
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const [result] = await connection.execute(sql, params)
            return result
        } catch (error) {
            console.log('Query Error');
            console.log(error)
            return false;
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        return false;
    } finally {
        connection.release();
    }
}



module.exports = {
    pool,
    query,
    execute
}

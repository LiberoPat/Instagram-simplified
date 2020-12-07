const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "oc0vnuoax2071j10",
    password: "zxp6qpw8l7r1cmgj",
    database: "dosgv0ck7sgf0swj"
});

module.exports = pool;

const {Pool} = require("pg");

const pool = new pool({
    host:"localhost",
    user: "postgres",
    password: "password",
    database: "gymdb",
    port: 5432
});

module.exports = pool;
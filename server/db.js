const Client = require("pg").Client;

const client = new Client({
    user: "postgres",
    password: "Papa1973",
    host: "localhost",
    port: 5432,
    database: "workout"
})

module.exports = client;

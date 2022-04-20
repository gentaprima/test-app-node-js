const Sequelize = require("sequelize");
const db = require("../../config/db");

const T_test = require("./t_test");

const tTest = T_test(db,Sequelize);

async function authenticate(){
    try {
        await db.authenticate();
        console.log("Connection has been established successfully");
    } catch (error) {
        console.error("Unable to connect to the database",error);
    }
}
authenticate();

module.exports = Object.freeze({
    tTest
})
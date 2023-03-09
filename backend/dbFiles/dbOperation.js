const config = require('./dbConfig')
const sql = require('mssql')

const getNames = async() => {
    try {
        let pool = await sql.connect(config);
        let names = pool.request().query("SELECT * FROM FulbrightParticipants");
        console.log(names);
        return names;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getNames
}
const  mongoose  = require("mongoose")

var conn = null

DbContection = function(){
    if (conn === null){
        conn = mongoose.createConnection("mongodb://localhost/MapMarket")
        console.log("conectado ao DB");   
    }
}

module.exports = {
    conn: conn,
    DbContection
}

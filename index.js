var mysql = require("mysql2");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydb",
});
conn.connect(function(err){
    if (err) throw err;
    console.log("Connected! ");
    var adr = "Mountain 21";
    var name = "Amy";
    var sql = "DELETE FROM customers WHERE address = 'Mointain 21'";
    conn.query(sql,function(err,result,fields){
        if (err) throw err;
        console.log("Number of records deleted: "+result.affectedRows);
    });
});
const mysql = require('mysql2');

let connection = {}
function createDatabaseConnection() {
    connection['mysqlConn'] = mysql.createConnection({
        host: 'sql12.freemysqlhosting.net',
        user: 'sql12295533',
        database: 'sql12295533',
        password: 'PTMGQKTu7x',
        port: 3306
    });
    const {mysqlConn} = connection;
    mysqlConn.execute(`create table if not exists questionOne(
        id int primary key auto_increment,
        option1 int not null default 0,
        option2 int not null default 0,
        options3 int not null default 0,
        options4 int not null default 0
    )`, function(err) {
        if(err) {
            console.error(err.message);
        }
        console.log('Table questionOne created successsfully');
    });
    
    mysqlConn.execute(`create table if not exists questionTwo(
        id int primary key auto_increment,
        option1 int not null default 0,
        option2 int not null default 0,
        options3 int not null default 0,
        options4 int not null default 0
    )`, function(err) {
        if(err) {
            console.error(err.message);
        }
        console.log('Table questionTwo created successfully');
    });
    
}

module.exports = { connection, createDatabaseConnection};

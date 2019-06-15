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
        option3 int not null default 0,
        option4 int not null default 0
    )`, function(err, result) {
        if(err) {
            console.error(err.message);
        }
        console.log('Table questionOne created successsfully');
        mysqlConn.execute('select * from questionOne', function(error, data) {
            if(data.length === 0) {
                mysqlConn.execute(`insert into questionOne (option1, option2, option3, option4) values (0,0,0,0)`, function() {
                    console.log('Initial data inserted into table questionOne');
                });
            }
        });    
    });
    
    mysqlConn.execute(`create table if not exists questionTwo(
        id int primary key auto_increment,
        option1 int not null default 0,
        option2 int not null default 0,
        option3 int not null default 0,
        option4 int not null default 0
    )`, function(err, result) {
        if(err) {
            console.error(err.message);
        }
        console.log('Table questionTwo created successsfully');
        mysqlConn.execute('select * from questionTwo', function(error, data) {
            if(data.length === 0) {
                mysqlConn.execute(`insert into questionTwo (option1, option2, option3, option4) values (0,0,0,0)`, function() {
                    console.log('Initial data inserted into table questionTwo');
                });
            }
        });
        
    });
    
}


module.exports = { connection, createDatabaseConnection};

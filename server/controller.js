const db = require('./database');

function getVotes(req, res) {
    const { mysqlConn } = db.connection;
    mysqlConn.query('select * from questionOne', function(err, result) {
        mysqlConn.query('select * from questionTwo', function(err2, result2) {
            if(err || err2) {
                console.log(err, err2);
            }
            console.log(result, result2, "response data from database");
            
        });
    });
    

}

function putVotes(req, res) {
    const { mysqlConn } = db.connection;
    const {ques, option} = req.query.ques;

    mysqlConn.query('select * from '+ques, function(err, result) {
        if(err) {
            res.send(err.message);
            return;
        }

        result[option] += 1;

        mysqlConn.query('update '+ques+' set '+option+'='+result[option], function(error, resp) {
            console.log(resp);
            return;
        });
    });
}

module.exports = {
    getVotes,
    putVotes
}

const db = require('./database');

function getVotes(req, res) {
    const { mysqlConn } = db.connection;
    mysqlConn.query('select * from questionOne', function(err, result) {
        if(err) {
            console.error(err.message);
        }
        mysqlConn.query('select * from questionTwo', function(err2, result2) {
            if(err2) {
                console.error(err2.message);
            }
            res.send({
                data: {
                    questionOne: result[0],
                    questionTwo: result2[0]
                },
                message: "Data fetched successfully"
            });
            
        });
    });
    

}

function putVotes(req, res) {
    const { mysqlConn } = db.connection;
    const {ques, option} = req.query;

    mysqlConn.query(`select * from ${ques}`, function(err, result) {
        if(err) {
            res.send(err);
            return;
        }
        
        result[0][option] += 1;

        mysqlConn.query(`update ${ques} set ${option}=${result[0][option]}`, function(error, resp) {
            mysqlConn.query(`select * from ${ques}`, function(error, data) {
                res.send({
                    data: data[0],
                    message: "Vote data updated successfully"
                });
            });
        });
    });
}

module.exports = {
    getVotes,
    putVotes
}

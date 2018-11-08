var mysql = require('mysql');
var cluster = require('cluster');
module.exports = function(logger, poolConfig){

    var yiimpConfig = poolConfig.yiimpMode;
    var coin = poolConfig.coin.name;

    var connection = mysql.createPool({
        host: yiimpConfig.host,
        port: yiimpConfig.port,
        user: yiimpConfig.user,
        password: yiimpConfig.password,
        database: yiimpConfig.database
    });


    var logIdentify = 'MySQL';
    var logComponent = coin;



    this.handleAuth = function(workerName, password, authCallback){
        authCallback(true);
    };

    this.handleShare = function(isValidShare, isValidBlock, shareData){

        // //userid
        // var result = [];
        // var userid = 0;
        // var username = shareData.worker.split('.')[0];
        // var workerid = 0;
        // var coinid = 0;
        // var algo = "";
        // var sql = "";

        // console.log("Username: " + username);

        // sql = 'SELECT id FROM accounts WHERE username = "' + username + '";'
        // console.log("SQL:" + sql);
        // connection.query(sql,function(err, result, fields) {
        //     if (err){
        //         logger.error(logIdentify, logComponent, 'Database error userid: ' + JSON.stringify(err));
        //     }

        //     userid = result[0].id;

        //     //workerid require userid
        //     console.log("userid: " + userid);
        //     sql = 'SELECT id FROM workers WHERE userid = ' + userid + ';';
        //     console.log("SQL:" + sql);
        //     connection.query(sql,function(err, result){
        //             if (err){
        //                 logger.error(logIdentify, logComponent, 'Database error workerid: ' + JSON.stringify(err));
        //             }
        //             else if (result[0]){
        //                 console.log(result);
        //                 workerid = result[0].id;
        //             }
        //         }
        //     );
        // });

        

        // //coinid
        // connection.query(
        //     'SELECT coinid FROM coins_nomp WHERE nomp_coin_name = ?',
        //     [logComponent],
        //     function(err, result){
        //         if (err){
        //             logger.error(logIdentify, logComponent, 'Database error coinid: ' +
        //                 JSON.stringify(err));
        //         }
        //         else if (result[0]){
        //             coinid = result[0].id;
        //         }
        //     }
        // );

        // //algo
        // connection.query(
        //     'SELECT algo FROM coins WHERE id = ?',
        //     [coinid],
        //     function(err, result){
        //         if (err){
        //             logger.error(logIdentify, logComponent, 'Database error algo: ' +
        //                 JSON.stringify(err));
        //         }
        //         else if (result[0]){
        //             algo = result[0].algo;
        //         }
        //     }
        // );

        // //logger.error(logIdentify, logComponent, JSON.stringify(shareData));

        // var dbData = [
        //     userid,
        //     workerid,
        //     coinid,
        //     shareData.job,
        //     0,                          //pid
        //     typeof(shareData.error) === 'undefined' ? null : shareData.error,
        //     isValidShare ? '1' : '0',
        //     shareData.difficulty * (poolConfig.coin.yiimpDiffMultiplier || 1),
        //     shareData.shareDiff,
        //     algo
        // ];

        // logger.error(logIdentify, logComponent, JSON.stringify(dbData));
        // connection.query(
        //     // userid,workerid,coinid,jobid=0,pid=[id proccess],time,error=NULL,valid,difficulty,share_diff,algo,
        //     'INSERT INTO `shares` SET userid = ?, workerid = ?, coinid = ?, jobid = ?, pid = ?, time = NOW(), error = ?, valid = ?, difficulty = ?, share_diff = ?, algo = ?',
        //     dbData,
        //     function(err, result) {
        //         if (err)
        //             logger.error(logIdentify, logComponent, 'Insert error when adding share: ' + JSON.stringify(err));
        //         else
        //             logger.debug(logIdentify, logComponent, 'Share inserted');
        //     }
        // );
    };

    this.handleDifficultyUpdate = function(workerName, diff){

        // connection.query(
        //     'UPDATE `pool_worker` SET `difficulty` = ' + diff + ' WHERE `username` = ' + connection.escape(workerName),
        //     function(err, result){
        //         if (err)
        //             logger.error(logIdentify, logComponent, 'Error when updating worker diff: ' +
        //                 JSON.stringify(err));
        //         else if (result.affectedRows === 0){
        //             connection.query('INSERT INTO `pool_worker` SET ?', {username: workerName, difficulty: diff});
        //         }
        //         else
        //             console.log('Updated difficulty successfully', result);
        //     }
        // );
    };


};

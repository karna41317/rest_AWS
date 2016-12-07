var aws = require('./awsConfig.js');
var ec2 = aws.getEC2();

exports.ec2API = function(apiName, params, callback){

    console.log(apiName);
    console.log(params);

    ec2[apiName](params, function(err, data) {
        if (err){
            callback(err, null);
        }else{
            callback(null, data);
        }
    });
};
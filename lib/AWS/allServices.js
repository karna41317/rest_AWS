var aws = require('./awsConfig.js');
exports.allAPI = function(serviceName, apiName, params, callback){
    console.log(serviceName);
    console.log(apiName);
    console.log(params);
    var aServiceObject = aws.getServiceObject(serviceName);
    aServiceObject[apiName](params, function(err, data) {
        if (err){
            callback(err, null);
        }else{
            callback(null, data);
        }
    });
};
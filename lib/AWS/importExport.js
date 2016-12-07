var aws = require('./awsConfig.js');
var awsObj = aws.importExport();

exports.api = function(apiName, params, callback){

    console.log(apiName);
    console.log(params);

    awsObj[apiName](params, function(err, data) {
        if (err){
            callback(err, null);
        }else{
            callback(null, data);
        }
    });
};
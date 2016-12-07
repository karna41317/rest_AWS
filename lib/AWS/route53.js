var aws = require('./awsConfig.js');
var route53 = aws.getRoute53();
var async = require('async');

exports.changeResourceRecordSets = function(params, callbackMain){
    async.series({
            one: function(callback){
                setTimeout(function(){
                    route53.changeResourceRecordSets(params, function(err, data) {
                        if (err){
                            callback(err, null);
                        }else{
                            callback(null, data);
                        }
                    });
                }, 2000);
            }
        },
        function(err, results){
            setTimeout(function(){
                if (err){
                    callbackMain(err, null);
                }else{
                    callbackMain(null, results);
                }
            }, 4000);
        });
};
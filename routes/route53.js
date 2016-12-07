var route53 = require('../lib/AWS/route53.js');
exports.changeResourceRecordSets = function(req, res){
    console.log('route53 changeResourceRecordSets');
    var params = req.body;
    route53.changeResourceRecordSets(params, function(err, data){
        if(err){
            console.log(err);
            res.json(400, err);
        }else{
            console.log(data);
            res.json(200, data);
        }
    });
};

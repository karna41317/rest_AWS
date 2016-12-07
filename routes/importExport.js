var awsObj = require('../lib/AWS/importExport.js');
exports.api = function(req, res){
    var apiName = req.params.apiName;
    var params = req.body;
    console.log('ImportExport: '+apiName);
    console.log(req.body);
    awsObj.api(apiName, params, function(err, data){
        if(err){
            console.log(err);
            res.json(400, err);
        }else{
            console.log(data);
            res.json(200, data);
        }
    });
};
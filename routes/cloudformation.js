var cloudformation = require('../lib/AWS/cloudformation.js');
exports.createStack = function(req, res){
    var stack_config = JSON.parse(req.body.stack_config);
    var cloudformation_template = JSON.parse(req.body.cloudformation_template);
    console.log(stack_config.StackName);
    console.log(cloudformation_template.AWSTemplateFormatVersion);
    cloudformation.createStack(stack_config, cloudformation_template, function(err, result){
        if(err){
            console.log(err);
            res.json(400, err);
        }else{
            console.log(result);
            res.json(200, result);
        }
    });
};

exports.createStackURLTemplate = function(req, res){
    console.log('cf submit');
    var stack_config = JSON.parse(req.body.stack_config);
    var cloudformation_templateURL = req.body.cloudformation_templateURL;
    console.log(stack_config.StackName);
    console.log(cloudformation_templateURL);
    cloudformation.createStackURLTemplate(stack_config, cloudformation_templateURL, function(err, result){
        if(err){
            console.log(err);
            res.json(400, err);
        }else{
            console.log(result);
            res.json(200, result);
        }
    });
};

exports.updateStack = function(req, res){

    console.log('cf update');
    var stack_config = JSON.parse(req.body.stack_config);
    var cloudformation_template = JSON.parse(req.body.cloudformation_template);
    console.log(stack_config.StackName);
    console.log(cloudformation_template.AWSTemplateFormatVersion);
    cloudformation.updateStack(stack_config, cloudformation_template, function(err, result){
        if(err){
            console.log(err);
            res.json(400, err);
        }else{
            console.log(result);
            res.json(200, result);
        }
    });
};

exports.deleteStack = function(req, res){
    var stackName = req.params.stackName;
    console.log('Stack to delete: '+stackName);
    cloudformation.deleteStack(stackName, function(err, result){
        if(err){
            console.log(err);
            res.json(400, err);
        }else{
            console.log(result);
            res.json(200, result);
        }
    });
};

exports.validateTemplate = function(req, res){
    var template = req.body.cloudformation_template;
    cloudformation.validateTemplate(template, function(err, result){
        if(err){
            console.log(err);
            res.json(400, err);
        }else{
            console.log(result);
            res.json(200, result);
        }
    });
};

exports.describeStacks = function(req, res){
    var stackName = req.param("stackName");
    cloudformation.describeStacks(stackName, function(err, data){
        if(err){
            console.log(err);
            res.json(400, err);
        }else{
            console.log(data);
            res.json(200, data);
        }
    });
};
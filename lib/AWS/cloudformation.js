var aws = require('./awsConfig.js');
var cloudformation = aws.getCloudFormation();

exports.createStack = function(stack_config, cloudformation_template, callback){
    stack_config.TemplateBody = JSON.stringify(cloudformation_template);
    cloudformation.createStack(stack_config, function(err, data) {
        if(err){
            callback(err)
        }
        else{
            callback(null, data);
        }
    });
};
exports.createStackURLTemplate = function(stack_config, cloudformation_templateURL, callback){
    stack_config.TemplateURL = cloudformation_templateURL;
    cloudformation.createStack(stack_config, function(err, data) {
        if(err){
            callback(err)
        }
        else{
            callback(null, data);
        }
    });
};

exports.updateStack = function(stack_config, cloudformation_template, callback){
    stack_config.TemplateBody = JSON.stringify(cloudformation_template);
    cloudformation.updateStack(stack_config, function(err, data) {
        if(err){
            callback(err)
        }
        else{
            callback(null, data);
        }
    });
};

exports.deleteStack = function(stack_name, callback){

    var params = {
        StackName: stack_name
    };
    cloudformation.deleteStack(params, function(err, data) {
        if(err){
            callback(err)
        }
        else{
            callback(null, data);
        }
    });
};

exports.validateTemplate = function(cloudformation_template, callback){
    var params = {
        TemplateBody: cloudformation_template
    };
    cloudformation.validateTemplate(params, function(err, data) {
        if(err){
            callback(err)
        }
        else{
            callback(null, data);
        }
    });
};

exports.describeStacks = function(stackName, callback){

    var params = {
        StackName: stackName
    };

    cloudformation.describeStacks(params, function(err, data) {
        if(err){
            callback(err)
        }
        else{
            callback(null, data);
        }
    });
};
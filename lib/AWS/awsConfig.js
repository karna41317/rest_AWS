var config = require('../../config.js');
var AWS = require('aws-sdk');
var aws_accessKeyId = process.env.aws_accessKeyId || config.aws_accessKeyId;
var aws_secretAccessKey = process.env.aws_secretAccessKey || config.aws_secretAccessKey;
var aws_region = process.env.aws_region || config.aws_region;
var aws_DynamoDB_version = process.env.aws_DynamoDB_version || config.aws_DynamoDB_version;
var aws_CloudFormation_version = process.env.aws_CloudFormation_version || config.aws_CloudFormation_version;
var aws_SQS_version = process.env.aws_SQS_version || config.aws_SQS_version;
var aws_EC2_version = process.env.aws_EC2_version || config.aws_EC2_version;
var aws_Route53_version = process.env.aws_route53_version || config.aws_route53_version;
var aws_importExport_version = process.aws_importExport_version || config.aws_importExport_version;

AWS.config.update({accessKeyId: aws_accessKeyId, secretAccessKey: aws_secretAccessKey, region: aws_region});
AWS.config.apiVersions = {
    dynamodb: aws_DynamoDB_version,
    cloudformation: aws_CloudFormation_version,
    sqs: aws_SQS_version,
    ec2: aws_EC2_version,
    route53: aws_Route53_version,
    importexport: aws_importExport_version
};

var dynamodb = new AWS.DynamoDB();
var cloudformation = new AWS.CloudFormation();
var sqs = new AWS.SQS();
var ec2 = new AWS.EC2();
var route53 = new AWS.Route53();
var importExport = new AWS.ImportExport();
var elb = new AWS.ELB();

exports.getDynamodb = function(){
    return dynamodb;
};
exports.getCloudFormation = function(){
    return cloudformation;
};

exports.getSQS = function(){
    return sqs;
};

exports.getEC2 = function(){
    return ec2;
};

exports.getRoute53 = function(){
    return route53;
};

exports.importExport = function(){
    return importExport;
};

exports.getServiceObject = function(serviceName){
    return new AWS[serviceName]();
};

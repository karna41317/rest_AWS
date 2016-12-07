var sqs = require('../lib/AWS/sqs.js');

describe("SQS functionality", function(){
    it("Should try to retrieve a message from a non-existant queue", function(done){
        var params = JSON.parse('{"QueueUrl":"https://sqs.us-east-1.amazonaws.com/126911164279/invalid","MaxNumberOfMessages":1,"VisibilityTimeout":0,"WaitTimeSeconds":0}');
        sqs.receiveMessage(params, function(err, result){
            expect(JSON.stringify(err)).toContain('AWS.SimpleQueueService.NonExistentQueue');
            expect(result).toBe(null);
            done();
        });
    }, 6000);

    it("Should try to send a message from a non-existant queue", function(done){
        var params = JSON.parse('{"MessageBody":"something here","QueueUrl":"https://sqs.us-east-1.amazonaws.com/126911164279/invalid","DelaySeconds":0}');
        sqs.sendMessage(params, function(err, result){
            expect(JSON.stringify(err)).toContain('AWS.SimpleQueueService.NonExistentQueue');
            expect(result).toBe(null);
            done();
        });
    }, 6000);


});
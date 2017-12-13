var AWS = require('aws-sdk');

AWS.config.update({region:'us-east-1'});
var s3 = new AWS.S3();

var getS3Data = function(thingName, callback) {
    s3.listBuckets(function(err, buckets) {
        if(err) { callback(err) }
        else { callback(null, thingName) }
    })
};


module.exports = {
    getS3Data : getS3Data
};
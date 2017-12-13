var aws_iot = require('./aws_iot');
var aws_s3 = require('./aws_s3');

// Get HTML <div> for Groups
var getGroupHtml = function(callback) {
    aws_iot.listGroups(function (err, groupArr) {
        if (err) {
            callback(err)
        }
        else {
            var html = '';
            groupArr.forEach(function (groupName) {
                html += '<div class="card card-clickable" onclick="buildThings(this)">' +
                            '<div class="card-body">' +
                                '<div class="card-title text-center">' + groupName + '</div>' +
                            '</div>' +
                        '</div>'
            });
            callback(null, html)
        }
    });
};

// Get HTML <div> for Things
var getThingHtml = function(groupName, callback) {
    aws_iot.listThingsInGroup(groupName, function (err, thingArr) {
        if (err) {
            callback(err)
        }
        else {
            var html = '';
            thingArr.forEach(function (thingName) {
                html += '<div class="card card-clickable" onclick="buildAnalytics(this)">' +
                            '<div class="card-body">' +
                                '<div class="card-title text-center">' + thingName + '</div>' +
                            '</div>' +
                        '</div>'
            });
            callback(null, html)
        }
    });
};

// Get HTML <div> for Thing Analytics
var getThingAnalytics = function(groupName, callback) {
    aws_s3.getS3Data(groupName, function (err, thingName) {
        if (err) {
            callback(err)
        }
        else {
            var html = '';
            //buckets.forEach(function (bucket) {
                html += '<div class="card card-clickable">' +
                            '<div class="card-body">' +
                                '<div class="card-title text-center">CHART HERE FOR<br>' + thingName + '</div>' +
                            '</div>' +
                        '</div>'
            //});
            callback(null, html)
        }
    });
};


module.exports = {
    getThingHtml : getThingHtml,
    getGroupHtml : getGroupHtml,
    getThingAnalytics : getThingAnalytics
};

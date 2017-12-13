var AWS = require('aws-sdk');

AWS.config.update({region:'us-east-1'});
var iot = new AWS.Iot();

// List IoT Groups
var listGroups = function(callback) {
    var groupArr = [];

    iot.listThingGroups(function(err, data) {
        if(err) {
            callback(err)
        }
        else {
            data.thingGroups.forEach(function(groupObj) {
                groupArr.push(groupObj.groupName);
            });
            callback(null, groupArr);
        }
    });
};

// List IoT Things from a provided Group name
var listThingsInGroup = function(groupName, callback) {

    var params = {
        thingGroupName: groupName
    };

    iot.listThingsInThingGroup(params, function(err, data) {
        if(err) {
            callback(err)
        }
        else {
            callback(null, data.things.sort())
        }
    });
};


module.exports = {
    listGroups: listGroups,
    listThingsInGroup: listThingsInGroup
};

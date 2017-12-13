var buildGroups = function() {
    $.get('/groups', function(data) {
        $('#groupsContainer').html(data);
    });
};

var buildThings = function(_this) {
    $('#analytics').hide();
    var groupName = $(_this).text();
    $.get('/things/' + groupName, function(data) {
        $('#thingsContainer').html(data);
        $('#things').show();
    });
};

var buildAnalytics = function(_this) {
    var thingName = $(_this).text();
    $.get('/analytics/' + thingName, function(data) {
        $('#analyticsContainer').html(data);
        $('#analytics').show();
    });
};


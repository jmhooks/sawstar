var Express = require('express');
var app = Express();
var path = require('path');
var components = require('./js/components');

var port = 3630;
console.log("Starting server on port " + 3630 + "...");

app.use(Express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Get Groups HTML
app.get('/groups',function(req, res){
    components.getGroupHtml(function(err, html) {
        if(err) {
            res.send(err.stack);
        } else {
            res.send(html);
        }
    })
});

// Get Things HTML
app.get('/things/:group',function(req, res){
    var groupName = req.params.group;
    components.getThingHtml(groupName, function(err, html) {
        if(err) {
            res.send(err.stack);
        } else {
            res.send(html);
        }
    })
});

// Get Analytics HTML
app.get('/analytics/:thing',function(req, res){
    var thingName = req.params.thing;
    components.getThingAnalytics(thingName, function(err, html) {
        if(err) {
            res.send(err.stack);
        } else {
            res.send(html);
        }
    })
});

app.listen(port);

console.log("Connected and listening!");
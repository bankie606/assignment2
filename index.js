
 var express = require("express");
var app = express();

// configure Express app
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(require("body-parser").urlencoded({extended: true}));

app.get('/', function(req,res){
    res.type('text/html');
    res.sendfile('./public/home.html');    
});

app.get('/about', function(req,res){
    res.type('text/plain');
    res.send('About page');
});

// JavaScript File// JavaScript Array
var synths = [
    {id: 0, name: 'korg', price: 250.00},
    {id: 1, name: 'nord', price: 400.00},
    {id: 2, name: 'elektron', price: 500.00},
    ];

app.post('/search', function(req,res){
    res.type('text/html');
    var header = 'Searching for: ' + req.body.search_term + '<br>';
    var found = synths.find(function(item) {
       return item.name == req.body.search_term;
    });
    
    if (found) {
        res.send(header + "Price: " + found.price);
    } else {
        res.send(header + "No such synth exists in our inventory.");
    }
});


app.use(function(req,res) {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), function() {
    console.log('Express started');    
});



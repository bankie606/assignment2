
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

app.get('/contact', function(req,res){
    res.type('text/html');
    res.sendfile('./public/contact.html');
});

// JavaScript Array
var synths = [
    {id: 0, name: 'korg',model:'Poly-800', price: 250.00},
    {id: 1, name: 'nord',model:'Micro-Modular', price: 400.00},
    {id: 2, name: 'elektron',model:'Monomachine', price: 500.00},
    {id: 3, name: 'ensoniq',model:'Fizmo', price: 1500.00},
    {id: 4, name: 'moog',model:'Memory Moog', price: 2500.00},
    {id: 5, name: 'buchla',model:'Who In Their Right Mind Would Buy This?', price: 6500.00},
    ];

app.post('/search', function(req,res){
    res.type('text/html');
    var header = 'Searching for: ' + req.body.search_term.toLowerCase()+ '<br>';
    var found = synths.find(function(item) {
       return item.name == req.body.search_term.toLowerCase();
    });
    var synthmodel = found.model + ' ';
    
    if (found) {
        res.send(header + synthmodel + "Price: " + found.price);
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



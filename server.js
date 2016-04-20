// JavaScript Array
var synths = [
    {id: 0, name: 'Korg Poly 800', price: 250.00},
    {id: 1, name: 'Nord Micro Modular', price: 400.00},
    {id: 2, name: 'Elektron Monomachine', price: 500.00},
    ];
    
var express = require('express'),
    exphbs  = require('express-handlebars'); // "express-handlebars"

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));;
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home.html');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('express-handlebars example server listening on: 3000');
});

app.post('/', function (req, res) {
  res.send('POST request to homepage');
});



// we are specifying the html directory as another public directory
app.use('/html', express.static(__dirname + '/public'));
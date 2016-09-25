var express = require ('express');
var app = express();
var port = process.env.PORT;
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'client', 'views'));
app.listen(port);

app.get('/', function(req, res){
	res.render('index.ejs');
});
app.listen(port, function(){
console.log("Server UP: Port :" + port);
});
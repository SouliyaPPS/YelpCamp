var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
  {name: 'Salmon Creek', image:'https://source.unsplash.com/qelGaL2OLyE'},
  {name: 'Granite Hill', image:'https://source.unsplash.com/63pP6_FlnMY'},
  {name: 'Mountain Goats Rest', image:'https://source.unsplash.com/5Rhl-kSRydQ'},
  {name: 'Thunderhoof Mountain', image:'https://source.unsplash.com/359AOEwnYcw'}
]

app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds', function(req, res){


  res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res){
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  //redirect back to campgrounds page
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res){
  res.render('new.ejs');
});

app.listen(3000, function(){
  console.log('Server Listening on PORT 3000');
});

module.export = app;

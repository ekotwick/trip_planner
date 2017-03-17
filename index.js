// built in modules
const path = require('path');

// npm modules
const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

const nunjucks = require('nunjucks');

module.exports = app;

// our modules


// 
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, function(){
	console.log('Server listening on part 3000 \n');
})


app.get('/', function(req, res){
	res.render('index');
})


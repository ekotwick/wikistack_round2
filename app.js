const morgan = require('morgan');
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const Page = require('./models').Page;
const User = require('./models').User;

// NOT app = router();
const app = express();

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment 
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

// static folder
app.use(express.static('public'));

Page.sync()
	.then( function() {
		return User.sync();
	})
	.then( function() {
		app.listen(3000, function (){
			console.log('\n SERVER LISTENING ON PORT 3000! \n');
		})
	})


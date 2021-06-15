//. app.js

//. dependent libraries
var express = require( 'express' ),
    ejs = require( 'ejs' ),
    app = express();

//. enable routing
app.use( express.Router() );

//. use EJS as template engine, which can be found under ./views/ folder
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

//. import external API under '/api'
var myapi = require( './api/myapi' );
app.use( '/api', myapi );

//. TOP page
var count = 0;
app.get( '/', async function( req, res ){
  //. Use top.ejs as template with parameter: { count: count } 
  res.render( 'top', { count: count } );
});

//. Page 1
app.get( '/page1', function( req, res ){
  //. Use page1.ejs as template with parameter: { title: 'My Page' } 
  res.render( 'page1', { title: 'My Page'} );
});

//. Page 2
app.get( '/page2', function( req, res ){
  //. Use page2.ejs as template with parameter: { title: '俺のページ' } 
  res.render( 'page2', { title: '俺のページ'} );
});

//. Listening port would be provided via environment variable(PORT), or 8080.
var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );


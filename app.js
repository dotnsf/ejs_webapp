//. app.js

var express = require( 'express' ),
    ejs = require( 'ejs' ),
    app = express();

app.use( express.Router() );

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/', async function( req, res ){
  res.render( 'top', {} );
});

app.get( '/page1', async function( req, res ){
  res.render( 'page1', { title: 'My Page 1'} );
});

app.get( '/page2', async function( req, res ){
  res.render( 'page2', { title: '俺のページ２'} );
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );


//. myapi.js

//. dependent libraries
var express = require( 'express' ),
    router = express();

//. GET /api/hello
router.get( '/hello', function( req, res ){
  res.contentType( 'application/json; charset=utf8' );
  res.write( JSON.stringify( { status: true, message: 'Hello, world!' } ) );
  res.end();
});

//. export router
module.exports = router;

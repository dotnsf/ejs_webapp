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

//. async `count` function
var _count = 0;
router.count = async function(){
  return new Promise( async function( resolve, reject ){
    resolve( ++ _count );
  });
}

//. export router
module.exports = router;

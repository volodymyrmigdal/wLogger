( function _Browser_test_s_( ) {

'use strict';

let _global = _global_;
let _ = _global_.wTools;
let Parent = wTester;

//

function toStrEscaping( str )
{
  return _.toStr( str,{ escaping : 1 } );
}

//

function simplest( test )
{

  test.case = 'simple1';

  var logger = new _.Logger({ output : console });

  logger.logUp( 'up' );
  logger.log( 'log' );
  logger.log( 'log\nlog' );
  logger.log( 'log','a','b' );
  logger.log( 'log\nlog','a','b' );
  logger.log( 'log\nlog','a\n','b\n' );
  logger.logDown( 'down' );

  test.identical( 1,1);

}

//

let Self =
{

  name : 'Tools/base/printer/Browser',
  enabled : () => Config.platform !== 'nodejs',
  silencing : 1,

  tests :
  {
    simplest,
  },

}

//

Self = wTestSuite( Self );
if( typeof module !== 'undefined' && !module.parent )
wTester.test( Self.name );

} )( );
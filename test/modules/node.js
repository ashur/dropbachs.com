const assert = require( 'chai' ).assert;
const Node = require( '../../src/js/modules/node' );

describe( 'Node', function()
{
	describe('#radius', function()
	{
		it( 'should return d/2', function()
		{
			let node = new Node( 10 );
			assert.equal( node.radius, 5 );
		});
	});
});

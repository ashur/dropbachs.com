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

	describe('#scale', function()
	{
		it( 'should adjust all other properties', function()
		{
			let node = new Node( 10, -3 );

			assert.equal( node.diameter, 10 );
			assert.equal( node.offset, -3 );
			assert.equal( node.radius, 5 );

			node.scale = 2;

			assert.equal( node.diameter, 20, 'diameter' );
			assert.equal( node.offset, -6, 'offset' );
			assert.equal( node.radius, 10, 'radius' );
		});
	});
});

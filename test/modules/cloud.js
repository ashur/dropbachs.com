const assert = require( 'chai' ).assert;
const Cloud = require( '../../src/js/modules/cloud' );
const Node = require( '../../src/js/modules/node' );

describe( 'Cloud', function()
{
	describe('#height', function()
	{
		it( 'should return maximum diameter', function()
		{
			let nodes = [
				new Node( 5 ),
				new Node( 17 ),
				new Node( 10 ),
			];

			let cloud = new Cloud( nodes );

			assert.equal( cloud.height, 17 );
		});
	});

	describe('#width', function()
	{
		it( 'should return sum of node diameters', function()
		{
			let nodes = [
				new Node( 5 ),
				new Node( 10 ),
			];

			let cloud = new Cloud( nodes );

			assert.equal( cloud.width, 15 );
		});

		it( 'should return sum of node diameters and offsets', function()
		{
			let nodes = [
				new Node( 20 ),
				new Node( 30, -10 ),
			];
		
			let cloud = new Cloud( nodes );
		
			assert.equal( cloud.width, 40 );
		});
	});
});

const Cloud = require( './modules/cloud' );
const Node = require( './modules/node' );

const colors = require( './variables/colors.json' );

window.onload = () =>
{
	let canvas = document.getElementById( 'myCloud' );
	let cloud = new Cloud(
	[
		new Node( 75 ),
		new Node( 300, -70 ),
		new Node( 200, -70 ),
		new Node( 40, -40 ),

	], colors.greens[0] );

	cloud.draw( canvas );
};

const App = require( './modules/app' );
const Cloud = require( './modules/cloud' );
const Clouds = require( './modules/clouds' );
const Node = require( './modules/node' );

const colors = require( './variables/colors.json' );

window.onload = () =>
{
	let palette = colors.purple;
	let palette = colors.darkGreen;

	let app = new App( document.getElementById( ( 'app' ) ) );
	app.backgroundColor = palette.sky;

	let background = app.addCloudsLayer( 'background' );
	let foreground = app.addCloudsLayer( 'foreground' );

	let cloud = new Cloud(
	[
		new Node( 75 ),
		new Node( 300, -70 ),
		new Node( 200, -70 ),
		new Node( 100, -35 ),
		new Node( 150, -20 ),
		new Node( 250, -40 ),
		new Node( 50, -50 ),

	], palette.foreground, window.devicePixelRatio );


	cloud = new Cloud(
	[
		new Node( 75 ),
		new Node( 275, -70 ),
		new Node( 200, -70 ),

	], palette.background, window.devicePixelRatio );

	foreground.drawCloudAt( cloud, -5, 35 );
	background.drawCloudAt( cloud2, 20, 30 );

	window.app = app;
	window.colors = colors;
};

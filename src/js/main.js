const App = require( './modules/app' );
const Cloud = require( './modules/cloud' );
const Clouds = require( './modules/clouds' );
const Node = require( './modules/node' );

const colors = require( './variables/colors.json' );

window.onload = () =>
{
	if( !(typeof document.head.animate === "function") )
	{
		var jsElm = document.createElement("script");
		jsElm.type = "application/javascript";
		jsElm.src = "https://polyfill.io/v2/polyfill.min.js?features=WebAnimations";
		document.body.appendChild(jsElm);
	}

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

	foreground.drawCloudAt( cloud, -5, 15 );

	cloud = new Cloud(
	[
		new Node( 75 ),
		new Node( 275, -70 ),
		new Node( 200, -70 ),

	], palette.background, window.devicePixelRatio );

	background.drawCloudAt( cloud, 20, 10 );

	cloud = new Cloud(
	[
		new Node( 75 ),
		new Node( 275, -70 ),
		new Node( 200, -70 ),
	
	], palette.background, window.devicePixelRatio );

	background.drawCloudAt( cloud, 80, 70 );

	window.app = app;
	window.colors = colors;
};

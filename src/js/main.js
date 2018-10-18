const App = require( './modules/app' );
const Background = require( './modules/background' );
const Credits = require( './modules/credits' );
const Record = require( './modules/record' );

const scenes = require( './data/scenes' );

window.onload = () =>
{
	let scene = scenes[ Math.floor( Math.random() * scenes.length ) ];
	let app = new App( scene );

	app.record.light = {
		start: 'rgba( 246, 194, 117, 0.2 )',
		end: 'rgba( 0, 0, 0, 0.1 )',
		angle: 95
	};

	setTimeout( () =>
	{
		scene.play( app, 151000 );
		console.log( `Scene: ${scene.name}` );

	}, 5000 );

	window.app = app;
};

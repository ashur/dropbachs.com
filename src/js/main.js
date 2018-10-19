const App = require( './modules/app' );
const Background = require( './modules/background' );
const Credits = require( './modules/credits' );
const Record = require( './modules/record' );

const scenes = require( './data/scenes' );

window.onload = () =>
{
	let scene = scenes[ Math.floor( Math.random() * scenes.length ) ];
	let app = new App( scene );

	if( scene.record && scene.record.light )
	{
		app.record.light = scene.record.light;
	}

	app.record.element.onclick = () =>
	{
		scene.play( app, 151000 );
	};

	// https://archive.org/details/AirSuiteNo.3InDMajor
	// https://archive.org/details/15SuiteNo.4EnMiBemolMajeur

	window.app = app;
};

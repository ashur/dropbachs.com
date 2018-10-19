const App = require( './modules/app' );
const scenes = require( './data/scenes' );

window.onload = () =>
{
	let scene = scenes[ Math.floor( Math.random() * scenes.length ) ];
	let app = new App( scene );

	app.record.element.onclick = () =>
	{
		app.play( 151000, 15000 )
			.then( () =>
			{
				app.credits.opacity( 0.7, 10000 );
			});
	};

	// https://archive.org/details/AirSuiteNo.3InDMajor
	// https://archive.org/details/15SuiteNo.4EnMiBemolMajeur

	window.app = app;
};

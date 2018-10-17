const App = require( './modules/app' );
const Scene = require( './modules/scene' );

window.onload = () =>
{
	let app = new App( document.getElementById( ( 'app' ) ) );


	app.scene = new Scene( 'https://images.unsplash.com/photo-1498637841888-108c6b723fcb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54d1fa94e704450bcdd1aa84dae243cf&auto=format&fit=crop&w=2691&q=80' );

	window.app = app;
};

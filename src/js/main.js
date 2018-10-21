const App = require( './modules/app' );
const {Howl, Howler} = require( 'howler' );
const SceneBuilder = require( './modules/builder' );
const scenes = require( './data/scenes' );
const songs = require( './data/songs.json' );

window.onload = () =>
{
	let scene = scenes[ Math.floor( Math.random() * scenes.length ) ];
	let song = songs[ Math.floor( Math.random() * songs.length ) ];

	let app = new App( scene );
	let sound = new Howl({
		src: song.src
	});

	sound.on( 'load', () =>
	{
		app.record.labelImage = song.label;
		app.record.title = song.name;

		app.record.element.onclick = () =>
		{
			app.play( sound, 15000 )
				.then( () =>
				{
					app.credits.opacity( 0.6, 13000 );
				});
		};

		app.record.show();
	});

	/* Scene Builder */
	let builderStyle = window.getComputedStyle( document.querySelector( '#builder' ) );
	let builderWidth = `calc( ${builderStyle.width} + ${builderStyle.padding} * 2 )`;
	app.element.style.right = builderWidth;

	let builder = new SceneBuilder( app );

	let builderControls = document.querySelectorAll( '#builder input' );
	builderControls.forEach( control =>
	{
		let eventType = control.dataset.event || 'input';
		builder.watch( control.id, eventType );
	});
	
	window.app = app;
};

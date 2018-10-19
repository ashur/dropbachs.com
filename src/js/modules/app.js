const Background = require( './background' );
const Credits = require( './credits' );
const Module = require( '../module' );
const Record = require( './record' );

class App extends Module
{
	constructor( scene )
	{
		super( document.getElementById( ( 'app' ) ) );

		this.background = new Background( scene.background.url );
		this.record = new Record();

		this.scene = scene;

		if( this.scene.preplay )
		{
			this.scene.preplay.call( this );
		}
	}

	get background()
	{
		return this._background;
	}

	set background( module )
	{
		this._background = module;
		this.appendChild( module );
	}

	get credits()
	{
		return this._credits;
	}

	set credits( module )
	{
		this._credits = module;
		this.appendChild( module );
	}
	
	play( sound, offset )
	{
		let duration = Math.floor( sound.duration() ) * 1000;
		offset = offset || 0;

		return new Promise( resolve =>
		{
			this.record.spin( 16000 );
			this.scene.play.call( this, duration );
			sound.play();

			this.credits = new Credits();

			setTimeout( () =>
			{
				if( this.scene.postplay )
				{
					this.scene.postplay.call( this );
				}
				resolve();

			}, duration - offset );
			
		}, duration - offset );
	}

	get record()
	{
		return this._record;
	}

	set record( module )
	{
		this._record = module;
		this.appendChild( module );
	}
}

module.exports = App;

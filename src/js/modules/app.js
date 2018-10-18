const Background = require( './background' );
const Module = require( '../module' );
const Record = require( './record' );

class App extends Module
{
	constructor( scene )
	{
		super( document.getElementById( ( 'app' ) ) );

		this.background = new Background( scene.background.url );
		this.record = new Record();
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

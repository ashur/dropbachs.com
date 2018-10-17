const Module = require( '../module' );

class App extends Module
{
	get credits()
	{
		return this._credits;
	}

	set credits( module )
	{
		this._credits = module;
		this.appendChild( module );
	}

	get scene()
	{
		return this._scene;
	}

	set scene( module )
	{
		this._scene = module;
		this.appendChild( module );
	}
}

module.exports = App;

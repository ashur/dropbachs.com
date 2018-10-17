const Module = require( '../module' );

class App extends Module
{
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

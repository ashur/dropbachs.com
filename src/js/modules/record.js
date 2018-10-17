const Module = require( '../module' );

class Record extends Module
{
	constructor()
	{
		let element = Module.createElement( { id: 'record' } );
		super( element );

		/* "Submodules" */
		this.vinyl = new Module( Module.createElement( { className: 'vinyl' } ) );
		this.appendChild( this.vinyl );
	}

	get light()
	{
		return this._light;
	}

	set light( options )
	{
		if( !this._light )
		{
			this._light = new Module( Module.createElement( { className: 'light' } ) );
			this.appendChild( this._light );
		}

		if( options.start && options.end )
		{
			let gradient = `${options.start}, ${options.end}`;
			this._light.element.style.background = `linear-gradient( ${gradient} )`;		
		}

		if( options.duration )
		{
			this._light.element.style.transitionDuration = `${options.duration}ms`;
		}
		if( options.angle !== undefined )
		{
			this._light.element.style.transform = `rotate( ${options.angle}deg )`;
		}
	}

	spin( duration )
	{
		this.vinyl.element.style.animationDuration = `${duration}ms`;
		this.vinyl.element.style.animationName = 'spin';
	}
}

module.exports = Record;

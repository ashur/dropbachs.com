const Module = require( '../module' );

class Record extends Module
{
	constructor()
	{
		let element = Module.createElement( { id: 'record' } );
		super( element );

		/* "Submodules" */
		this._vinyl = new Module( Module.createElement( { className: 'vinyl' } ) );
		this.appendChild( this._vinyl );

		this.label = new Module( Module.createElement( { className: 'label' } ) );
		this.appendChild( this.label );
	}

	get light()
	{
		return this._light;
	}

	set light( options )
	{
		console.log( options );
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

	scale( scale, duration )
	{
		return new Promise( (resolve, reject) =>
		{
			this.element.style.transitionDuration = `${duration}ms`;
			this.element.style.transform = `scale( ${scale} )`;

			setTimeout( () =>
			{
				resolve();

			}, duration );
		});
	}

	spin( duration )
	{
		this.label.element.style.animationDuration = `${duration}ms`;
		this.label.element.style.animationName = 'spin';
	}
}

module.exports = Record;

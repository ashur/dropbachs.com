const Module = require( '../module' );

class Record extends Module
{
	constructor()
	{
		let element = Module.createElement( { id: 'record' } );
		super( element );

		this.properties = {
			opacity: 1.0,
			scale: 1.0,
		};

		/* "Submodules" */
		this._vinyl = new Module( Module.createElement( { className: 'vinyl' } ) );
		this.appendChild( this._vinyl );

		this.label = new Module( Module.createElement( { className: 'label' } ) );
		this.appendChild( this.label );
	}

	drop( scale, duration )
	{
		return new Promise( (resolve, reject) =>
		{
			this.transition( 'transform', `${duration}ms`, 'ease-in-out' );
			this.scale = scale;
	
			setTimeout( () =>
			{
				resolve();
	
			}, duration );
		});
	}

	fade( opacity, duration, delay )
	{
		return new Promise( (resolve, reject) =>
		{
			delay = delay || 0;
			setTimeout( () =>
			{
				this.transition( 'opacity', `${duration}ms`, 'ease-in-out' );
				this.opacity = opacity;
	
				setTimeout( () =>
				{
					resolve();
	
				}, duration );
	
			}, delay );
		});
	}

	hide()
	{
		this.opacity = 0;
	}

	get labelColor()
	{
		return this.element.style.getPropertyValue( '--label-color' );
	}

	set labelColor( color )
	{
		this.element.style.setProperty( '--label-color', color );
	}

	set labelImage( filename )
	{
		this.label.element.style.backgroundImage = `url( images/${filename}.png )`;
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

		if( options.angle !== undefined )
		{
			if( options.duration )
			{
				this._light.transition( 'transform', `${options.duration}ms`, 'ease-in-out' );
			}

			this._light.element.style.transform = `rotate( ${options.angle}deg )`;
		}
	}

	get opacity()
	{
		return this.properties.opacity;
	}

	set opacity( opacity )
	{
		this.properties.opacity = opacity;
		this.element.style.opacity = opacity;
	}

	get scale()
	{
		return this.properties.scale;
	}

	set scale( scale )
	{
		this.properties.scale = scale;
		this.element.style.transform = `scale( ${scale} )`;
	}

	show()
	{
		this.opacity = 1;
	}

	spin( duration )
	{
		this.label.element.style.animationDuration = `${duration}ms`;
		this.label.element.style.animationName = 'spin';
	}

	set title( string )
	{
		this.element.setAttribute( 'title', string );
	}
}

module.exports = Record;

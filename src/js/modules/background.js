const Module = require( '../module' );

class Background extends Module
{
	constructor( image, width )
	{
		let element = Module.createElement( { id: 'background' } );
		super( element );

		this.properties = {
			angle: 0,
			blur: 0,
			image: '',
			scale: 0,
			width: 100,
		};

		this.blur = 10;
		this.scale = 1.05;
		this.image = image;
	}

	get angle()
	{
		return this.properties.angle;
	}

	set angle( angle )
	{
		this.properties.angle = angle;
		this.transform();
	}

	get blur()
	{
		return this.properties.blur;
	}

	set blur( blur )
	{
		this.properties.blur = blur;
		this.element.style.filter = `blur( ${blur}px )`;
	}

	get image()
	{
		return `${this.properties.image}?w=${this.width}`;
	}

	set image( url )
	{
		this.properties.image = url;
		this.element.style.backgroundImage = `url( ${this.image} )`;
	}

	render()
	{
		
	}

	get scale()
	{
		return this.properties.scale;
	}

	set scale( scale )
	{
		this.properties.scale = scale;
		this.transform();
	}

	transform()
	{
		this.element.style.transform = `scale( ${this.properties.scale} ) rotate( ${this.properties.angle}deg )`;
	}

	get width()
	{
		return this.properties.width;
	}

	set width( width )
	{
		this.properties.width = width;
		this.element.style.backgroundImage = `url( ${this.image} )`;
	}

	zoom( scale, angle, duration )
	{
		return new Promise( (resolve, reject) =>
		{
			this.transition( 'transform', `${duration}ms`, 'ease-in-out' );

			this.properties.angle = angle;
			this.properties.scale = scale;
			this.transform();

			setTimeout( () =>
			{
				resolve();

			}, duration );
		});
	}
}

module.exports = Background;

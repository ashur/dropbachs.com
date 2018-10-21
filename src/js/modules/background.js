const Module = require( '../module' );

class Background extends Module
{
	constructor( image )
	{
		let element = Module.createElement( { id: 'background' } );
		super( element );

		this.properties = {
			angle: 0,
			image: image,
			scale: 1.0,
		};

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

	get image()
	{
		return this.properties.image;
	}

	set image( url )
	{
		this.properties.image = url;
		this.element.style.backgroundImage = `url( ${url} )`;
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

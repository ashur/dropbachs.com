const Module = require( '../module' );

class Background extends Module
{
	constructor( image )
	{
		let element = Module.createElement( { id: 'background' } );
		super( element );

		this.image = image;
	}

	set image( url )
	{
		this.element.style.backgroundImage = `url( ${url} )`;
	}

	zoom( scale, angle, duration )
	{
		return new Promise( (resolve, reject) =>
		{
			this.transition( 'transform', `${duration}ms`, 'ease-in-out' );
			this.element.style.transform = `scale( ${scale} ) rotate( ${angle}deg )`;

			setTimeout( () =>
			{
				resolve();

			}, duration );
		});
	}
}

module.exports = Background;

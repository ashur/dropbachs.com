const Module = require( '../module' );

class Scene extends Module
{
	constructor( image )
	{
		let element = Module.createElement( { id: 'scene' } );
		super( element );

		this.backgroundImage = image;
	}

	set backgroundImage( url )
	{
		this.element.style.backgroundImage = `url( ${url} )`;
	}

	zoom( scale, angle, duration )
	{
		this.element.style.transform = `scale( ${scale} ) rotate( ${angle}deg )`;
		this.element.style.transitionDuration = `${duration}ms`;
	}
}

module.exports = Scene;

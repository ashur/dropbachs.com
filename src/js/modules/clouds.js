const Module = require( '../module' );

class Clouds extends Module
{
	constructor( element, options )
	{
		super( element );

		options = options || {};

		this.clouds = [];
		this.playbackRate = options.playbackRate || 1;
	}

	static createElement( options )
	{
		let element = super.createElement( options );

		element.classList.add( 'clouds' );

		return element;
	}

	drawCloudAt( cloudModule, x, y )
	{
		cloudModule.x = x;
		cloudModule.y = y;
		cloudModule.playbackRate = this.playbackRate;

		cloudModule.draw();

		this.appendChild( cloudModule );
		this.clouds.push( cloudModule );
	}
}

module.exports = Clouds;

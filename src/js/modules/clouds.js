const Module = require( '../module' );

class Clouds extends Module
{
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

		cloudModule.draw();

		this.appendChild( cloudModule );
	}
}

module.exports = Clouds;

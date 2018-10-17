const Module = require( '../module' );

class Credits extends Module
{
	constructor( image )
	{
		let element = Module.createElement( { id: 'credits' } );
		super( element );
	}

	/**
	 * @param {number} opacity	Valid range from 0.0-1.0
	 */
	set opacity( opacity )
	{
		this.element.style.opacity = opacity;
	}

	/**
	 * @param {number} opacity	Valid range from 0.0-1.0
	 *
	 * @param {number} duration	Time, in milliseconds
	 */
	fadeIn( opacity, duration )
	{
		this.opacity = opacity;
		this.element.style.transitionDuration = `${duration}ms`;
	}
}

module.exports = Credits;

const Module = require( '../module' );

class Credits extends Module
{
	constructor()
	{
		let element = Module.createElement( { id: 'credits' } );
		super( element );
	}

	opacity( opacity, duration )
	{
		this.transition( 'opacity', `${duration}ms`, 'ease-in-out' );
		this.element.style.opacity = opacity;
	}
}

module.exports = Credits;

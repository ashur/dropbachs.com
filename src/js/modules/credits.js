const Module = require( '../module' );

class Credits extends Module
{
	constructor()
	{
		let element = Module.createElement( { id: 'credits' } );
		super( element );
	}

	set color( color )
	{
		this.element.style.backgroundColor = color;
	}

	opacity( opacity, duration )
	{
		this.transition( 'opacity', `${duration}ms`, 'ease-in-out' );
		this.element.style.opacity = opacity;
	}
}

module.exports = Credits;

const Clouds = require( './clouds' );
const Module = require( '../module' );

class App extends Module
{
	constructor( element )
	{
		super( element );
	}

	addCloudsLayer( id )
	{
		let cloudsModule = new Clouds( Clouds.createElement({
			id: id,
		}));

		this.appendChild( cloudsModule );

		return cloudsModule;
	}

	set backgroundColor( color )
	{
		document.getElementsByTagName( 'body' )[0].style.backgroundColor = color;
		// this.element.style.backgroundColor = color;
	}
}

module.exports = App;

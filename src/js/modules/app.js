const Clouds = require( './clouds' );
const Module = require( '../module' );

class App extends Module
{
	constructor( element )
	{
		super( element );
	}

	addCloudsLayer( id, options )
	{
		let cloudsModule = new Clouds( Clouds.createElement( { id: id } ), options );

		this.appendChild( cloudsModule );

		return cloudsModule;
	}

	set backgroundColor( color )
	{
		document.getElementsByTagName( 'body' )[0].style.backgroundColor = color;
	}
}

module.exports = App;

const Module = require( '../module' );

class RecordLight extends Module
{
	constructor()
	{
		let element = Module.createElement( { className: 'light' } );
		super( element );

		this.properties = {
			angle: 0,
			start: 'rgba( 0, 0, 0, 0 )',
			end: 'rgba( 0, 0, 0, 0 )',
		};
	}

	get angle()
	{
		return this.properties.angle;
	}

	set angle( angle )
	{
		this.properties.angle = angle;
		this.element.style.transform = `rotate( ${angle}deg )`;
	}

	get end()
	{
		return this.properties.end;
	}

	set end( color )
	{
		this.properties.end = color;
		this.setBackground();
	}

	rotate( angle, duration )
	{
		this.transition( 'transform', `${duration}ms`, 'ease-in-out' );
		this.angle = angle;
	}

	setBackground()
	{
		this.element.style.background = `linear-gradient( ${this.start}, ${this.end} )`;
	}

	get start()
	{
		return this.properties.start;
	}

	set start( color )
	{
		this.properties.start = color;
		this.setBackground();
	}
}

module.exports = RecordLight;
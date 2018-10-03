class Module
{
	constructor( element )
	{
		this.element = element;
	}

	appendChild( childModule )
	{
		this.element.appendChild( childModule.element );
	}

	static createElement( options )
	{
		let tagName = options.tagName || 'div';

		let element = document.createElement( tagName );

		let properties = ['id', 'className'];
		properties.forEach( property =>
		{
			if( options[property] )
			{
				element[property] = options[property];
			}
		});

		return element;
	}
}

module.exports = Module;

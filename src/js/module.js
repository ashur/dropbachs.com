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

		let properties = [ 'id', 'className' ];
		properties.forEach( property =>
		{
			if( options[ property ] )
			{
				element[ property ] = options[ property ];
			}
		} );

		return element;
	}



	transition( property, value, duration, timingFunction )
	{
		let newTransition = `${property} ${duration} ${timingFunction}`;
		let newTransitions = [];

		let originalTransitions = this.element.style.transition.split( ',' );

		let didAdd = false;
		originalTransitions.forEach( originalTransition =>
		{
			originalTransition = originalTransition.trim();

			if( originalTransition == "" )
			{
				// Skip blanks
				return;
			}

			let definition = originalTransition.split( ' ' );
			if( definition[0] == property )
			{
				// Property was already defined, let's replace it
				newTransitions.push( newTransition );
				didAdd = true;
			}
			else
			{
				// Unrelated definition, make sure we keep it
				newTransitions.push( originalTransition );
			}
		});

		if( !didAdd )
		{
			// First time this property has been added
			newTransitions.push( newTransition );
		}

		this.element.style.transition = newTransitions.join( ', ' );
		this.element.style[property] = value;
	}
}

module.exports = Module;

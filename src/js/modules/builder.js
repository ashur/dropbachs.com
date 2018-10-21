class SceneBuilder
{
	constructor( app )
	{
		this.app = app;
	}

	getProperty( pathString )
	{
		let path = pathString.split( '.' );
		return path.reduce( (a,b) =>
		{
			return a[b];

		}, this.app );
	}

	setProperty( pathString, value )
	{
		let path = pathString.split( '.' );
		let level = 0;

		// Taken from https://stackoverflow.com/questions/18936915/dynamically-set-property-of-nested-object
	    path.reduce( (a,b) =>
		{
	        level++;

	        if( level === path.length )
			{
				a[b] = value;
				return value;
	        }
			else
			{
				return a[b];
	        }

		}, this.app );
	}

	watch( id, eventType, handler )
	{
		let inputElement = document.querySelector( `#builder #${id}` );
		if( !inputElement )
		{
			return;
		}

		function displayValue( value )
		{
			let displayElement = document.querySelector( `#builder #${id}-value` );
			if( displayElement )
			{
				displayElement.innerText = value;
			}
		}

		/* Map Property */
		let path = inputElement.dataset.property;

		inputElement.addEventListener( eventType, () =>
		{
			let value = inputElement.value;
			
			this.setProperty( path, value );
			displayValue( value );
			
			if( handler )
			{
				handler.call( null, value );
			}
		});

		let initialValue = this.getProperty( path );
		inputElement.value = initialValue;
		displayValue( initialValue );
	}
}

module.exports = SceneBuilder;

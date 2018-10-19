const Module = require( '../module' );

class Record extends Module
{
	constructor()
	{
		let element = Module.createElement( { id: 'record' } );
		super( element );

		/* "Submodules" */
		this._vinyl = new Module( Module.createElement( { className: 'vinyl' } ) );
		this.appendChild( this._vinyl );

		this.label = new Module( Module.createElement( { className: 'label' } ) );
		this.appendChild( this.label );
	}

	hide()
	{
		this.opacity( 0, 0 );
	}

	set labelColor( color )
	{
		this.element.style.setProperty( '--label-color', color );
	}

	get light()
	{
		return this._light;
	}

	set light( options )
	{
		if( !this._light )
		{
			this._light = new Module( Module.createElement( { className: 'light' } ) );
			this.appendChild( this._light );
		}

		if( options.start && options.end )
		{
			let gradient = `${options.start}, ${options.end}`;
			this._light.element.style.background = `linear-gradient( ${gradient} )`;		
		}

		if( options.angle !== undefined )
		{
			if( options.duration )
			{
				this._light.transition( 'transform', `${options.duration}ms`, 'ease-in-out' );
			}

			this._light.element.style.transform = `rotate( ${options.angle}deg )`;
		}
	}

	opacity( opacity, duration, delay )
	{
		return new Promise( (resolve, reject) =>
		{
			delay = delay || 0;
			setTimeout( () =>
			{
				this.transition( 'opacity', `${duration}ms`, 'ease-in-out' );
				this.element.style.opacity = opacity;
	
				setTimeout( () =>
				{
					resolve();
	
				}, duration );

			}, delay );
		});
	}

	scale( scale, duration )
	{
		return new Promise( (resolve, reject) =>
		{
			this.transition( 'transform', `${duration}ms`, 'ease-in-out' );
			this.element.style.transform = `scale( ${scale} )`;

			setTimeout( () =>
			{
				resolve();

			}, duration );
		});
	}

	show()
	{
		this.opacity( 1, 0 );
	}

	spin( duration )
	{
		this.label.element.style.animationDuration = `${duration}ms`;
		this.label.element.style.animationName = 'spin';
	}
}

module.exports = Record;

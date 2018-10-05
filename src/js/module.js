class Module
{
	constructor( element )
	{
		this.element = element;
		this.playbackRate = 1;
		
		this.units = {
			x: 'vw',
			y: 'vh',
		};
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

	moveBy( xOffset, yOffset, options )
	{
		// Convert from pixels to vw/vh
		let boundingRect = this.element.getBoundingClientRect();

		let originalX = boundingRect.left / document.documentElement.clientWidth * 100;
		let originalY = boundingRect.top / document.documentElement.clientHeight * 100;

		let x = xOffset == 0 ? null : this.boundingClientRect.x + xOffset;
		let y = yOffset == 0 ? null : this.boundingClientRect.y + yOffset;

		this.moveTo( x, y, options );
	}

	moveTo( x, y, options )
	{
		if( this.moveAnimation != undefined )
		{
			return;
		}

		let boundingRect = this.element.getBoundingClientRect();
		let originalX = boundingRect.left + 'px';
		let originalY = boundingRect.top + 'px';

		options = options || {};

		options.duration = options.duration || 0;
		options.easing = options.easing || "linear";

		let keyframes = [{}, {}];

		if( x != undefined )
		{
			keyframes[0].left = originalX;
			keyframes[1].left = `${x}${this.units.x}`;
		}
		if( y != undefined )
		{
			keyframes[0].top = originalY;
			keyframes[1].top = `${y}${this.units.y}`;
		}

		/* No change in position, let's go home. */
		if( Object.keys( keyframes[1] ).length == 0 )
		{
			return;
		}

		/* Don't set up a 0-length animation; move the element and call it a day */
		if( options.duration == 0 )
		{
			if( keyframes[1].left )
			{
				this.element.style.left = keyframes[1].left;
			}
			if( keyframes[1].top )
			{
				this.element.style.top = keyframes[1].top;
			}

			return;
		}

		/* Animation */
		let padDuration = 500; // ms

		console.log( keyframes );

		if( x != undefined )
		{
			let velocity = x / options.duration;
			let padDistance = velocity * padDuration;

			keyframes[1].left = (x + padDistance) + this.units.x;
		}
		if( y != undefined )
		{
			let velocity = y / options.duration;
			let padDistance = velocity * padDuration;

			keyframes[1].top = (y + padDistance) + this.units.y;
		}

		options.duration = options.duration / this.playbackRate + padDuration;

		console.log( keyframes, options );

		this.moveAnimation = this.element.animate( keyframes, options );
		// this.moveAnimation.playbackRate = this.playbackRate;

		setTimeout( () =>
		{
			console.log( 'done' );
			this.moveAnimation.pause();

		}, options.duration - padDuration );
	}

	/**
	 * Convert bounding rect properties to viewport units
	 */
	get boundingClientRect()
	{
		let boundingRect = this.element.getBoundingClientRect();
		let viewportRect = {};

		let viewportWidth = document.documentElement.clientWidth;
		let viewportHeight = document.documentElement.clientHeight;

		viewportRect.top = boundingRect.top / viewportHeight * 100;
		viewportRect.right = boundingRect.right / viewportWidth * 100;
		viewportRect.bottom = boundingRect.bottom / viewportHeight * 100;
		viewportRect.left = boundingRect.left / viewportWidth * 100;

		viewportRect.height = boundingRect.height / viewportHeight * 100;
		viewportRect.width = boundingRect.width / viewportWidth * 100;

		viewportRect.x = viewportRect.left;
		viewportRect.y = viewportRect.top;

		return viewportRect;
	}
}

module.exports = Module;

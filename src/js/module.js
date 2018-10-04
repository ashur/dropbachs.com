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

		x = x != undefined ? `${x}${this.units.x}` : originalX;
		y = y != undefined ? `${y}${this.units.y}` : originalY;

		options = options || {};

		options.duration = options.duration || 0;
		options.easing = options.easing || "linear";

		let keyframes = [
			{
				left: originalX,
				top: originalY,
			},
			{
				left: x,
				top: y,
			}
		];

		/* Don't set up a 0-length animation; just move the element */
		if( options.duration == 0 )
		{
			this.element.style.left = x;
			this.element.style.top = y;
			return;
		}

		this.moveAnimation = this.element.animate( keyframes, options );
		this.moveAnimation.playbackRate = this.playbackRate;

		setTimeout( () =>
		{
			this.moveAnimation.pause();

		}, options.duration / this.playbackRate - 100 );
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

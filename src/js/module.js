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

	set left( left )
	{
		this.element.style.left = `${left}${this.units.x}`;
	}
	
	get left()
	{
		return this.boundingClientRect.left;
	}

	/**
	 * @param {number} x		X position (in viewport units)
	 *
	 * @param {number} y		Y position (in viewport units)
	 *
	 * @param {number} duration	Animation duration (ms)
	 *
	 * @param {string} easing	Easing function (ex., 'linear')
	 *
	 * @return	{Promise}
	 */
	moveBy( xOffset, yOffset, duration, easing )
	{
		// Convert from pixels to vw/vh
		let boundingRect = this.element.getBoundingClientRect();

		let originalX = boundingRect.left / window.innerWidth * 100;
		let originalY = boundingRect.top / window.innerHeight * 100;

		let x = xOffset == 0 ? null : this.left + xOffset;
		let y = yOffset == 0 ? null : this.top + yOffset;

		return this.moveTo( x, y, duration, easing );
	}

	/**
	 * @param {number} x		X position (in viewport units)
	 *
	 * @param {number} y		Y position (in viewport units)
	 *
	 * @param {number} duration	Animation duration (ms)
	 *
	 * @param {string} easing	Easing function (ex., 'linear')
	 *
	 * @return	{Promise}
	 */
	moveTo( x, y, duration, easing )
	{
		return new Promise( (resolve, reject) =>
		{
			duration = duration || 0;

			if( duration == 0)
			{
				if( x != undefined )
				{
					this.left = x;
				}
				if( y != undefined )
				{
					this.top = y;
				}
			}
			else
			{
				let boundingRect = this.element.getBoundingClientRect();
				let keyframes = [{}, {}];
	
				if( x )
				{
					keyframes[0].left = boundingRect.left + 'px';
					keyframes[1].left = x + this.units.x;
				}
				if( y )
				{
					keyframes[0].top = boundingRect.top + 'px';
					keyframes[1].top = y + this.units.y;
				}

				let options = {
					duration: duration / this.playbackRate,
					easing: easing || 'ease-in'
				};

				let animation = this.element.animate( keyframes, options );
				let pauseAnimation = setInterval( () =>
				{
					animation.pause();
					clearInterval( pauseAnimation );

					resolve();	

				}, duration / this.playbackRate - 10 );
			}
		});
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

	set top( top )
	{
		this.element.style.top = `${top}${this.units.y}`;
	}

	get top()
	{
		return this.boundingClientRect.top;
	}
}

module.exports = Module;

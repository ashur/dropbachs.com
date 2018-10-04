const Module = require( '../module' );

class Cloud extends Module
{
	/**
	 * @param {Array.<Node>} nodes
	 */
	constructor( nodes, color, scale )
	{
		let element = document.createElement( 'canvas' );
		element.className = 'cloud';
		super( element );

		this.color = color;
		this.nodes = nodes;
		this.scale = scale || 2;

		this.x = 0;
		this.y = 0;
	}

	draw()
	{
		this.nodes.forEach( node =>
		{
			node.scale = this.scale;
		});

		this.element.width = this.width;
		this.element.height = this.height;

		this.element.style.left = `${this.x}vw`;
		this.element.style.top = `${this.y}vh`;

		this.element.style.width = Math.ceil( this.width / this.scale ) + 'px';

		let context = this.element.getContext( '2d' );

		let x = 0;
		let nodeCenters = [];

		/* Draw Nodes */
		this.nodes.forEach( node =>
		{
			x = x + node.radius + node.offset;

			node.center = { x: x, y: node.radius };
			nodeCenters.push( x );

			let y = this.element.height - node.radius;

			context.fillStyle = this.color;
			context.moveTo( x, y );
			context.arc( x, y, node.radius, 0, 360 );

			x = x + node.radius;
		});

		/* Draw Node Fillers */
		for( let n = 1; n < this.nodes.length; n++ )
		{
			let leftNode = this.nodes[n - 1];
			let rightNode = this.nodes[n];

			let shorterNode = leftNode.diameter < rightNode.diameter ? leftNode : rightNode;

			let x = leftNode.center.x;
			let y = this.element.height - shorterNode.center.y;

			let width = rightNode.center.x - leftNode.center.x;
			let height = shorterNode.center.y;

			context.moveTo( x, y );
			context.fillRect( x, y, width, height );
		}

		context.fill();
	}

	/**
	 * @return {number}
	 */
	get height()
	{
		let diameters = this.nodes.map( node =>
		{
			return node.diameter;
		});

		return Math.max( ...diameters );
	}

	/**
	 * @return {number}
	 */
	get width()
	{
		return this.nodes.reduce( (prev, curr) =>
		{
			let footprint = curr.diameter + curr.offset;

			if( prev.diameter )
			{
				return (prev.diameter + prev.offset) + footprint;
			}

			return prev + footprint;
		});
	}
}

module.exports = Cloud;

class Cloud
{
	/**
	 * @param {Array.<Node>} nodes
	 */
	constructor( nodes, color )
	{
		this.nodes = nodes;
		this.color = color;
	}

	/**
	 * @param {Canvas} canvas
	 */
	draw( canvas )
	{
		canvas.width = this.width;
		canvas.height = this.height;

		canvas.style.width = Math.ceil( this.width / 3 ) + 'px';

		let context = canvas.getContext( '2d' );

		let x = 0;
		let nodeCenters = [];

		/* Draw Nodes */
		this.nodes.forEach( node =>
		{
			x = x + node.radius + node.offset;

			node.center = { x: x, y: node.radius };
			nodeCenters.push( x );

			let y = canvas.height - node.radius;

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

			let x = leftNode.center.x;
			let y = canvas.height - leftNode.center.y;

			let width = rightNode.center.x - leftNode.center.x;
			let height = leftNode.center.y;

			console.log( leftNode, rightNode );

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
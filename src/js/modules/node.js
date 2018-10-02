class Node
{
	/**
	 * @param {number} diameter
	 */
	constructor( diameter, offset )
	{
		this.diameter = diameter;
		this.offset = offset || 0;
	}

	/**
	 * @return {number}
	 */
	get radius()
	{
		return this.diameter / 2;
	}
}

module.exports = Node;

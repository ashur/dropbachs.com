class Node
{
	/**
	 * @param {number} diameter
	 */
	constructor( diameter, offset )
	{
		this._diameter = diameter;
		this._offset = offset || 0;

		this.scale = 1;
	}

	get diameter()
	{
		return this._diameter * this.scale;
	}

	get offset()
	{
		return this._offset * this.scale;
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

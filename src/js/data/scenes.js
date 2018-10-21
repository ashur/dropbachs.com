module.exports = [
	{
		name: "The Natural Order Of Things",
	
		background: {
			url: 'https://images.unsplash.com/photo-1525703169860-003818a243e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ba1f98c84f96b12d26d2682a41ecfed&auto=format&fit=crop&w=2758&q=80',
			credit: "John Westrock",
		},

		preplay()
		{
			this.record.light = {
				start: 'rgba( 0, 0, 0, 0.3 )',
				end: 'rgba( 164, 165, 127, 0.2 )',
				angle: 115
			};
		},

		play( duration )
		{
			this.background.zoom( 1.3, 2, duration );

			this.record.light = {
				angle: 30,
				duration: duration
			}

			this.record.drop( 0.005, duration );
			this.record.fade( 0, 2000, duration - 9000 );
		},

		postplay()
		{
			this.background.zoom( 1.0, 0, 20000 );
		}
	},
];

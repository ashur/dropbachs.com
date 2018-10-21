module.exports = [
	{
		name: "The Natural Order Of Things",
	
		background: {
			url: 'https://images.unsplash.com/photo-1525703169860-003818a243e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ba1f98c84f96b12d26d2682a41ecfed&auto=format&fit=crop&w=2758&q=80',
			credit: "John Westrock",
		},

		preplay()
		{
			this.record.labelColor = 'rgb( 236, 216, 133 )';

			this.record.light = {
				start: 'rgba( 0, 0, 0, 0.5 )',
				end: 'rgba( 253, 241, 224, 0.15 )',
				angle: 115
			};
		},

		play( duration )
		{
			this.background.zoom( 1.3, 2, duration * 0.8 );

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

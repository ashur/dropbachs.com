module.exports = [
	{
		background: {
			name: "The Natural Order Of Things",
			credit: "John Westrock",
			url: 'https://images.unsplash.com/photo-1525703169860-003818a243e7',
		},

		preplay()
		{
			this.record.labelColor = 'rgb( 236, 216, 133 )';

			this.record.light.start = 'rgba( 0, 0, 0, 0.5 )';
			this.record.light.end = 'rgba( 253, 241, 224, 0.15 )';
			this.record.light.angle = 182;
		},

		play( duration )
		{
			this.background.zoom( 1.3, 2, duration * 0.8 );

			this.record.drop( 0.005, duration );
			this.record.fade( 0, 2000, duration - 9000 );

			this.record.light.rotate( 140, duration );
		},

		postplay()
		{
			this.background.zoom( 1.0, 0, 20000 );
		}
	},
];

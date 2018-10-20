module.exports = [
	{
		name: "Info",
	
		background: {
			url: 'https://images.unsplash.com/photo-1530906170914-b98659a7ff52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd4054f5c72192ea6ff92c601133051a&auto=format&fit=crop&w=2756&q=80',
			credit: "Nikita Tikhomirov",
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

			this.record.scale( 0.005, duration );
			this.record.opacity( 0, 2000, duration - 9000 );
		},

		postplay()
		{
			this.background.zoom( 1.0, 0, 20000 );
		}
	},
];

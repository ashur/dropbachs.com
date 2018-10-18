module.exports = [
	{
		name: "Info",
	
		background: {
			url: 'https://images.unsplash.com/photo-1530906170914-b98659a7ff52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd4054f5c72192ea6ff92c601133051a&auto=format&fit=crop&w=2756&q=80',
			credit: "Nikita Tikhomirov",
		},
	
		play( app, duration )
		{
			app.record.spin( 20000 );
			app.record.scale( 0.005, duration );
			app.background.zoom( 1.1, 2, duration * 1.2 );
		}
	},
	{
		name: "Into the mountains",
	
		background: {
			url: 'https://images.unsplash.com/photo-1508233620467-f79f1e317a05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93a811e9227eaf4510ef51e355d8c2ad&auto=format&fit=crop&w=2768&q=80',
			credit: "Jack Anstey",
		},
	
		play( app, duration )
		{
			app.record.spin( 20000 );
			app.record.scale( 0.004, duration );
			app.background.zoom( 1.1, 2, duration * 1.2 );
		}
	},
];

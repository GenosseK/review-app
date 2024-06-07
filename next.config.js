module.exports = {
	images: {
		domains: ['courses-top.ru'],
	},
	webpack(config, options) {
		config.module.rules.push({
			test: /\.svg$/, // Ensure the test property is correctly placed here
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						prettier: false,
						svgo: true,
						svgoConfig: {
							plugins: [
								{
									name: 'preset-default',
									params: {
										override: {
											removeViewBox: false,
										},
									},
								},
							],
						},
						titleProp: true,
					},
				},
			],
		});

		return config;
	},
};
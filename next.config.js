module.exports = {
	images: {
		domains: ['courses-top.ru', 'old-images.hb.ru-msk.vkcs.cloud'],
	},
	webpack(config, options) {
		config.module.rules.push({
			test: /\.svg$/,
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

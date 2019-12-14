const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(
	withSass({
		webpack(config, options) {
			config.module.rules.push({
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 100000
					}
				}
			});

			return config;
		}
	})
);

const webpack = require("webpack");
require("dotenv").config();

module.exports = {
	webpack: config => {
		const env = Object.keys(process.env).reduce((acc, curr) => {
			acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
			return acc;
		}, {});

		config.plugins.push(new webpack.DefinePlugin(env));

		return config;
	}
};

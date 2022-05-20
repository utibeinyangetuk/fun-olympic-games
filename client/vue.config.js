const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,

	//setting up a proxy to catch every request that begins with /api and send it to the server for processing
	devServer: {
		proxy: {
			"^/api": {
				target: "http://localhost:3000",
			},
		},
	},
});

module.exports = {
	async rewrites() {
		return [
			{
				source: "/projects/munchiesapp",
				destination: "https://munchiesapp.co.za/:path*",
			},
		];
	},
};

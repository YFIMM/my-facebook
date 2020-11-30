module.exports = {
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === "production";
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "inline-source-map",
      plugins: [...config.plugins],
      devServer: {
        port: 5003,
        proxy: {
          "/api/": {
            changeOrigin: true,
            target: "http://localhost:5003",
          },
        },
      },
    };
  },
};

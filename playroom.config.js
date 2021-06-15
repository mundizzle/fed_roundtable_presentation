module.exports = {
  components: "./playroom.components",
  snippets: "./playroom.snippets.js",
  outputPath: "./dist/playroom",
  iframeSandbox: "allow-scripts",
  openBrowser: false,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [require.resolve("style-loader"), require.resolve("css-loader")],
        },
        {
          test: /\.jsx?$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
      ],
    },
  }),
};

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";
import nodeExternals from "webpack-node-externals"; // для того чтобы не было ошибки с express пакетом
const config = {
  entry: "./src/index.ts",
  target: "node",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  externals: [nodeExternals()],
};

module.exports = config;

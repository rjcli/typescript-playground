import { resolve as _resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  // When mode is development, then code won't be minified. So, use mode = 'production' to minify the build code.
  mode: 'production',
  entry: './src/app.ts',
  devServer: {
    static: [
      {
        directory: join(__dirname),
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: _resolve(__dirname, 'dist'),
    publicPath: 'dist',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

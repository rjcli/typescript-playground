import { resolve as _resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: 'production',
  // mode: 'development',
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
    publicPath: '/dist/',
  },
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

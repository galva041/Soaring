/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds/', // Customize the public path if needed
          outputPath: 'static/sounds/', // Output path for the bundled file
          name: '[name].[ext]', // Name of the output file
        },
      },
    });
    
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/', // Customize the public path if needed
          outputPath: 'static/videos/', // Output path for the bundled file
          name: '[name].[ext]', // Name of the output file
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
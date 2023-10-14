/** @type {import('next').NextConfig} */
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const nextConfig = { 
    webpack: (config, { 
      buildId, 
      dev, 
      isServer, 
      defaultLoaders, 
      webpack 
    }) => {
      config.plugins.push(
        new CopyPlugin({
          patterns: [{ 
              from: 'node_modules/bootstrap-italia/dist/',
              to: path.resolve(__dirname, './public/bootstrap-italia/dist')
          },  {
            from: 'node_modules/leaflet/dist/images',
            to: path.resolve(__dirname, 'public', 'leaflet', 'images')
          },]
        })
      );
      return config;
    },
  };

module.exports = nextConfig

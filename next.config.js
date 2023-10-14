/** @type {import('next').NextConfig} */
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
// Prepare from/to 
const from = "node_modules/bootstrap-italia/dist/";
const to = path.join(__dirname, "./public/bootstrap-italia/dist");

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
          patterns: [{ from, to }]
        })
      );
      return config;
    },
  };

module.exports = nextConfig

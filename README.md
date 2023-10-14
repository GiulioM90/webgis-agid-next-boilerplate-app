
npm i -S bootstrap-italia

you have to install a plugin, copy-webpack-plugin, required to move static assets from the node_modules library (bootstrap-italia) into the project build folder using webpack:
npm i --save-dev copy-webpack-plugin
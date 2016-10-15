# SD UI Foundation Themes

[Free themes](http://es-di.com/foundation/) for the most advanced responsive front-end framework in the world - ZURB Foundation 6. 
SD UI themes are made for people to create their projects even faster with Foundation.

[![SD UI Foundation Logo](http://es-di.com/wp-content/themes/sd-com/static/img/foundation/foundation-girl-github.png)](http://es-di.com/foundation)

## List of themes
- [Classic](http://es-di.com/sdcontent/foundation/classic/) - Clean light-blue theme 
- [Dark](http://es-di.com/sdcontent/foundation/dark/) - Clean Dark UI
- [Gradient](http://es-di.com/sdcontent/foundation/gradient/) - Clean blue theme with gradients
- Coming soon...

## Usage 
Replace the default Foundation CSS and JS files with the files from `theme-name/dist/`. Installation is complete, enjoy!

Advanced usage
--------------
You can easily customize themes for you own goals. For themes building we use node + npm (yarn) + [webpack](https://webpack.github.io/).
To start you should perform several steps:

1. Install [node](https://nodejs.org/en/download/package-manager/) and [npm](https://github.com/npm/npm)

2. Install required npm packages
    * You can use default packages manager - [npm](https://github.com/npm/npm)
     ` npm i ` - for development mode;
     ` npm i --production ` - for production
    * Or brand new [yarn](https://github.com/yarnpkg/yarn/) from Facebook developers. 
     ` npm i -g yarn ` - install yarn;
     ` yarn ` - for development mode;
     ` yarn --prod ` - for production

3. Start webpack development server. Specify option `--theme=name` to build theme you want, 
classic one is built by default. 
    ` npm start -- --theme=dark `

4. Build final source
    ` npm run build -- --theme=classic `

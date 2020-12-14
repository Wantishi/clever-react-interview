const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  stories: ["../components/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
   // ... your existing configuration here ...
  ],
  webpackFinal: (config) => {
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    config.plugins.push(new Dotenv({
      path: './.storybook/.env'
    }));
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          // Filter out the default .scss & .css rules.
          ...config.module.rules.filter((rule) => !/scss/.test(rule.test.toString()) && !/css/.test(rule.test.toString())),
          // Add our own scss rule which in turn will read the postcss.config.js from project root.
          {
            test: /.scss|.css$/,
            use: [
              // Create `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              { 
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  },
                } 
              },
              // Process the PostCss abilities
              { loader: "postcss-loader", options: { sourceMap: true, } },
              // Compile Sass to Css
              { loader: 'sass-loader', options: { sourceMap: true, } },
            ],
          },
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
      }
    };
  },
};
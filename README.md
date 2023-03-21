npm init -y
npm i webpack webpack-cli
mkdir src
touch src/index.{js,html}
div#root > index.html
touch webpack.config.js
echo node_modules/ > .gitignore
git init && git add . && git commit -m "webpack init"

npm i -D style-loader css-loader postcss-loader postcss-preset-env sass-loader sass file-loader html-webpack-plugin clean-webpack-plugin webpack-dev-server

#babel + react
https://babeljs.io/setup#installation
npm install --save-dev babel-loader @babel/core
npm install @babel/preset-env --save-dev
https://babeljs.io/docs/babel-preset-react
npm install --save-dev @babel/preset-react
https://babeljs.io/docs/babel-polyfill
npm install --save @babel/polyfill
need for entry: \*.jsx support
npm i --save react react-dom

#redux
https://www.youtube.com/playlist?list=PL6DxKON1uLOHTgN679Es1vkCS911i9HJX
4 3\29

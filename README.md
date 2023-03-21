# configure webpack

## init

```
npm init -y
npm i webpack webpack-cli
mkdir src
touch src/index.{js,html}
echo div#root > src/index.html
touch webpack.config.js
echo node_modules/ > .gitignore
git init && git add . && git commit -m "webpack init"
```

## webpack plugins&loaders

```
npm i -D style-loader css-loader postcss-loader postcss-preset-env sass-loader sass file-loader html-webpack-plugin clean-webpack-plugin webpack-dev-server
```

## babel + react

-  https://babeljs.io/setup#installation
-  https://babeljs.io/docs/babel-preset-react
-  https://babeljs.io/docs/babel-polyfill

```
npm i -D babel-loader @babel/core @babel/preset-react @babel/preset-env
npm i @babel/polyfill react react-dom
```

#redux
https://www.youtube.com/playlist?list=PL6DxKON1uLOHTgN679Es1vkCS911i9HJX
4 3\29

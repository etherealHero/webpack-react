npm init -y
npm i webpack webpack-cli
mkdir src
touch src/index.{js,html}
div#root > index.html
touch webpack.config.js
echo node_modules/ > .gitignore
git init && git add . && git commit -m "webpack init"

npm i -D style-loader css-loader postcss-loader postcss-preset-env sass-loader file-loader html-webpack-plugin clean-webpack-plugin webpack-dev-server

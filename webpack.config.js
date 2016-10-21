module.exports = {
 context: __dirname,
 entry: "./javascript/scripts.jsx",
 output: {
   path: "./javascript",
   filename: "bundle.js"
 },
 module: {
   loaders: [
     {
       test: [/\.jsx?$/, /\.js?$/],
       exclude: /(node_modules|bower_components)/,
       loader: 'babel',
       query: {
         presets: ['es2015', 'react']
       }
     }
   ]
 },
 devtool: 'source-maps',
 resolve: {
   extensions: ["", ".js", ".jsx" ]
 }
};

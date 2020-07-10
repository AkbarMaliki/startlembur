// const purgecss = require('@fullhuman/postcss-purgecss')
// const join = require('path').join
// const tailwindJS = join(__dirname, 'tailwind.js')
// const autoprefixer = require('autoprefixer')
module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.config.js'), require('autoprefixer'),
    // require('postcss-import')(),
    // require('postcss-url')(),
    // purgecss({
    //   content: [
    //     "./src/**/*.html",
    //     "./src/**/*.vue"
    //   ]
    // })
  ]
}

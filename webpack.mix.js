let mix = require('laravel-mix');

mix.setPublicPath('dist')
	.postCss("src/css/app.css", "dist", [require("tailwindcss")])
	.js('src/js/app.js', 'dist').vue()
	.version();
const mix = require("laravel-mix");

// mix.postCss("resources/css/tailwind.css", "dist/css/tailwind.css", [
//     require("tailwindcss"),
// ])
mix.js("resources/js/bard.js", "dist/js/textcolor.js").vue({ version: 2 });

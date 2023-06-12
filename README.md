
# Statamic Bard Text Color Extension

![Statamic 3.0+](https://img.shields.io/badge/Statamic-3.0+-FF269E?style=for-the-badge&link=https://statamic.com)
[![Total Downloads](https://img.shields.io/packagist/dt/xndbogdan/statamic-bard-text-color.svg)](https://packagist.org/packages/xndbogdan/statamic-bard-text-color)

## Introduction

![alt text](https://github.com/xndbogdan/statamic-bard-text-color/raw/main/preview_v3.0.png  "Preview")

This is a statamic bard plugin that lets you change text color!
It allows you to use the default tailwind palette, but you can also add your own.
At the moment it's still under development, so please report any bugs that you encounter.
New feature suggestions are welcomed too.

## Getting started

If you only wish to use the default tailwind palette, then it's as easy as running the composer require command.

` composer require xndbogdan/statamic-bard-text-color `

## Custom colors

### Using a config file
The simplest way of adding new colors to this plugin is by adding a  `bard-custom-colors.php`  config file to your project.
Please check [this](https://github.com/xndbogdan/statamic-bard-text-color/blob/main/config/bard-custom-colors.php) file if you need an example.

### Pulling colors from tailwind.config.js automatically
This part is still under development.
I'm planning to release a package that automatically exports your config when building/rebuilding the assets.

## Credits

Big thanks to:
- [Craig Anderson](https://github.com/intrepidws) for participating in active development.
- [Lars Heidkämper](https://github.com/heidkaemper) for participating in active development.
- [Bernhard Berger](https://github.com/bernhardberger) for participating in active development.
- [Hesesses](https://github.com/Hesesses) for suggesting a custom color implementation.
- [ncla](https://github.com/ncla) for showing a working example in a project implementation.
- [Jelle Roorda](https://github.com/jelleroorda) from the Statamic discord, for providing resources & advice on how to sucessfuly implement the feature.

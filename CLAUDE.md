# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Statamic 5 addon (`xndbogdan/statamic-bard-text-color`) that adds a text-color mark to the Bard fieldtype. Consumed by host Statamic apps via Composer; this repo is the package source, not a runnable app.

## Build

- `npm run dev` / `npm run watch` — Laravel Mix dev build (outputs `dist/js/textcolor.js`).
- `npm run production` — minified build. **Commit `dist/js/textcolor.js`** — it is the script registered by `ServiceProvider::$scripts` and shipped to consumers via Composer, so any JS/Vue change is only effective once the dist bundle is rebuilt and committed.
- No test suite, linter, or CI config exists.

## Architecture

Two sides that must stay in sync because the mark crosses the PHP/JS boundary:

1. **CP editor (Vue 2 / Tiptap via `Statamic.$bard`)** — `resources/js/bard.js` registers the `TextColor` mark (`resources/js/TextColor.js`) and a toolbar button whose popover is `TextColorMenu.vue`. Mark name is `textColor`; rendered HTML is `<span class="text-color" data-class="{color}" style="color: {color}">`. `TextColor.js::isCloseToWhite` adds a text-shadow in the editor for near-white colors so they stay visible on the white CP background.
2. **Front-end augmentation (PHP / Tiptap PHP)** — `src/TextColor.php` is a `Tiptap\Core\Mark` registered via `Augmentor::addExtension('text-color', ...)` in `ServiceProvider::boot`. It re-renders the same `<span class="text-color" style="color: ...">` when Bard content is augmented server-side. **If you change the rendered tag/class/attributes in `TextColor.js`, change `TextColor.php` to match** — otherwise the CP preview and the augmented output diverge.

`src/Bard.php` rebinds `Statamic\Fieldtypes\Bard` to provide `convertLegacyTextColor`, which migrates old mark attrs (`attrs.key` → `attrs.color`) before delegating to the parent's legacy Tiptap converter. Needed because the mark's attribute shape changed across versions.

### Color sources

`ServiceProvider::boot` pushes two config keys to the CP via `Statamic::provideToScript`:
- `bard-custom-colors` — from `config('bard-custom-colors.custom_colors')`, falling back to the root of `config('bard-custom-colors')` for backwards compat with older user configs that didn't nest under `custom_colors`.
- `bard-default-colors` — from `config('bard-custom-colors.default_colors')`; when unset, `TextColorMenu.vue` falls back to importing `tailwindcss/colors` directly.

The publishable stub (`config/bard-custom-colors.php`) documents both shapes (single hex, or nested palette map).

### Tailwind in the CP

Styles for the popover come from `resources/css/tailwind.css` imported inside `TextColorMenu.vue`. `tailwind.config.js` sets `corePlugins.preflight: false` — this is intentional (see commits `258a5d2` / PR #38): enabling preflight resets the host Statamic CP's base styles. Do not re-enable it.

## Conventions

- Vue 2 only (`.vue({ version: 2 })` in `webpack.mix.js`, `vue-template-compiler` pinned). The README lists Vue 3 / Vite migration as a planned feature, not current state.
- PHP namespace is `XndBogdan\BardTextColor\` (psr-4, `src/`).

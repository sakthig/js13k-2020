# ISLAND NOT FOUND

A game by Ben Clark and Salvatore Previti for https://2020.js13kgames.com/

PLAY IT HERE https://2020.js13kgames.com/entries/island-not-found

You can read the whole post-mortem/make-of with all the magic explained at https://github.com/SalvatorePreviti/js13k-2020/wiki/Post-Mortem

MIT License
Ben Clark, Salvatore Previti, 2020

https://www.linkedin.com/in/ben-clark-18bb3b20/

https://www.linkedin.com/in/salvatorepreviti/

# Requirements to play

This game requires a keyboard and a mouse or trackpad and is not designed to be played on mobile or tablet.
It works on the latest version of Chrome, Firefox and Edge.
It requires a not too old GPU and in general a machine not older than 5 years.

This game does not work on Safari due to the lack of webgl2 support https://caniuse.com/webgl2

# Build the source code

First install all the required packages with

```sh
npm i
```

NodeJS 14.8.0 is required.

- To starts the development server, port 3000, with hot/quick reload on file change.

```sh
npm run dev
```

- To builds the final zip file in the dist folder.

```sh
npm run build
```

- To typecheck typescript files (no compilation output)

```sh
npm run ts-check
```

- To run a generic .ts file or a .js file with es6 modules from node

```sh
npm run ts-run src/filename.ts
```

# Sources and credits:

- https://www.iquilezles.org/www/index.htm - Thank you! Your articles are amazing, truly inspiring, and our shader code is heavily based on your work. And we love [https://www.shadertoy.com/](ShaderToy)!
- https://github.com/mbitsnbites/soundbox - The tool that Ben used to compose the music.
- http://mercury.sexy/hg_sdf/ by MERCURY - We used or adapted some functions from this amazing library. Thanks MERCURY!
- https://www.shadertoy.com/view/Xl2XRW - We got inspiration from here for the water Fractional Brownian motion.
- http://prng.di.unimi.it/ - We used xoshiro pseudorandom number generator to feed randomness to our virtual island.
- https://developer.mozilla.org/ - for documentation
- https://www.gamasutra.com/view/feature/131326/designing_and_integrating_puzzles_.php?print=1 - Designing and Integrating Puzzles in Action-Adventure Games by Pascal Luban
- https://twitter.com/kostik13337 for helping us in testing and fixing the font for Linux

# Packages and tools:

- spglsl - https://github.com/SalvatorePreviti/spglsl experimental GLSL minifier based on Google [ANGLE](https://github.com/google/angle) project
- vitejs - https://github.com/vitejs/vite an opinionated web dev build tool that serves your code via native ES Module imports during dev and bundles it with Rollup for production.
- rollup - https://rollupjs.org/guide/en/ JavaScript module bundler
- terser - https://github.com/terser/terser JavaScript minifier
- esbuild - https://github.com/evanw/esbuild an extremely fast JS bundler (and TypeScript transpiler)
- TypeScript - https://www.typescriptlang.org/
- node-zopfli - https://github.com/pierreinglebert/node-zopfli ZOPFLI compressor for NodeJS
- adm-zip - https://github.com/cthackers/adm-zip pure JavaScript implementation for zip data compression. We monkey patched it to use node-zopfli instead of zlib.
- csso - https://github.com/css/csso css optimizer and minifier
- clean-css - https://github.com/jakubpawlowicz/clean-css css optimizer and minifier
- html-minifier - https://github.com/kangax/html-minifier HTML minifier
- babel - https://babeljs.io/ a JS compiler, to add some minification additional steps
- and NodeJS, GitHub, eslint, prettier, husky, lint-staged, chalk, and many others.

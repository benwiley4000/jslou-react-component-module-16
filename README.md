#jslou-react-component-module-16

See [prepped module](https://github.com/benwiley4000/jslou-react-component-module-16/tree/prepped) and [live-coded, deployed module](https://github.com/benwiley4000/jslou-react-component-module-16/tree/live).

A React component module built for a lightning talk at JSLou http://jslou.org/

##Tips for preparing a React component for npm:
1. Define React as a [peer dependency and webpack external](d1813b75023c8e6440d0d7697e6d1bf4bed9740f).
2. If your other dependencies are small, make them development dependencies and include them in your bundle. This makes it easier for someone to include your module.
3. Expose your module as a library via webpack - target should be `'umd'`.
4. You can name your library to make it available as a global via a script include.
5. Using the module as a global won't work unless you expose your module via `module.exports` instead of ES6 `export default`.
6. Include an example html file in your repo that demos your module and assists with contribution testing.
7. Don't use CSS modules; This makes it difficult for other developer to override your module's CSS styles.

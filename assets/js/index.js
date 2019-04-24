import '../scss/style.scss';

function requireAll(r) {
  r.keys().forEach(r);
}

// Load svg
requireAll(require.context('../../assets/svg/', true, /\.svg$/));
// Load Images
requireAll(require.context('../../assets/images/', true, /\.(png|jpg|gif|ico)$/));
// Load fonts
requireAll(require.context('../../assets/fonts', true, /\.(woff|woff2|eot|ttf|otf)$/));

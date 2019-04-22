import '../scss/index.scss';

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../../assets/svg/', true, /\.svg$/));

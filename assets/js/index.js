import '../scss/style.scss';
import * as Utils from './utils';
import Header from '../render/partials/header';
//
// const test1 = new Header('title');
//
// console.log(test1);
console.log(Header('title'));
// Load svg
Utils.requireAll(require.context('../../assets/svg/', true, /\.svg$/));
// Load Images
Utils.requireAll(require.context('../../assets/images/', true, /\.(png|jpg|gif|ico)$/));
// Load fonts
Utils.requireAll(require.context('../../assets/fonts', true, /\.(woff|woff2|eot|ttf|otf)$/));

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-test').forEach((test) => {
    Utils.requireAll(require.context('../../assets/svg/', test, /\.svg$/));
  });
}, false);

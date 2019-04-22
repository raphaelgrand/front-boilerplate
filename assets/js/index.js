import message from './message';
import '../scss/index.scss';

const title = document.createElement('h1');
const paragraph = document.createElement('p');
console.log('pwet');

paragraph.innerHTML = message;
paragraph.classList.add('paragraph');
title.innerHTML = 'Test de ouf !';
title.classList.add('title');

document.body.prepend(title, paragraph);

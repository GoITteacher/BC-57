/* import SimpleLightbox from 'simplelightbox';

let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function () {
  // Do something…
});

gallery.on('error.simplelightbox', function (e) {
  console.log(e); // Some usefull information
});
 */

import Player from '@vimeo/player';

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

player.on('play', function (evt) {
  console.log(evt.duration);
  console.log('played the video!');
});
player.on('pause', function () {
  console.log('played the video!');
});

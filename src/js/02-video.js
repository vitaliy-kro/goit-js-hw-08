import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(storageSet, 1000));

player
  .setCurrentTime(localStorage.getItem(STORAGE_KEY))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

function storageSet(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

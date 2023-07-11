import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
import { PlayerData } from '../types/video.types';
const STORAGE_KEY = 'videoplayer-current-time';
const frameForPlayer = document.querySelector('iframe')!;
const player = new Vimeo(frameForPlayer);
player.on('timeupdate', throttle(storageSet, 1000));

player
  .setCurrentTime(Number(localStorage.getItem(STORAGE_KEY) ?? 0))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

function storageSet(data: PlayerData) {
  console.log({ data });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
}

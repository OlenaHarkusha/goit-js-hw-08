import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

function getCurrentTime() {
  try {
    const currentTime = JSON.parse(
      localStorage.getItem('videoplayer-current-time')
    );
    return currentTime === null ? undefined : currentTime;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

player.setCurrentTime(getCurrentTime());

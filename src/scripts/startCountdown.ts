import { Timer } from './main/timer';

export function startCountdown(elementId: string, timer: Timer): void {
  //   const canvas = document.getElementById(elementId);
  //   if (!canvas) return;
  //   const overlay = document.createElement('div');
  //   overlay.id = 'overlay';
  //   canvas.appendChild(overlay);
  //   setTimeout((x) => {
  //     canvas.removeChild(overlay);
  //     timer.start();
  //     const pinger = setInterval(() => {
  //       const win =
  //         getComputedStyle(document.documentElement).getPropertyValue('--win') ===
  //         '1';
  //       if (win) {
  //         clearInterval(pinger);
  //         // setTimeout(() => {
  //         //   alert(`you win! You completed the challenge!`);
  //         // }, 300);
  //         return;
  //       }
  //       const time = Math.round(timer.getTime() / 1000);
  //       document.documentElement.style.setProperty('--timer', `'${time}s'`);
  //       document.documentElement.style.setProperty('--win', `'0'`);
  //     }, 100);
  //   }, 4000);
}

import { setTimer, setWin } from '../../common'
import Grid from './grid'
import Timer from './timer'

export default class Game {
  loadedTimer: any
  loadedPinger: any
  timer: Timer

  public constructor() {
    this.loadedTimer = null
    this.loadedPinger = null
    this.timer = new Timer()
  }

  public stop(canvas: HTMLMapElement) {
    const overlayDom = document.getElementById('overlay')
    if (overlayDom) canvas.removeChild(overlayDom)
    if (this.loadedTimer !== null) clearTimeout(this.loadedTimer)
    if (this.loadedPinger !== null) clearInterval(this.loadedPinger)
    setTimer(0)
  }

  public start(canvas: HTMLMapElement) {
    this.stop(canvas)

    Grid.shuffle(canvas)

    setWin(0)
    setTimer(0)

    const overlay = document.createElement('div')
    overlay.id = 'overlay'
    canvas.appendChild(overlay)

    this.loadedTimer = setTimeout((x) => {
      const overlayDom = document.getElementById('overlay')
      if (overlayDom) canvas.removeChild(overlayDom)

      this.timer.reset()
      this.timer.start()
      this.loadedPinger = setInterval(() => {
        const win =
          getComputedStyle(document.documentElement).getPropertyValue(
            '--win'
          ) === '1'

        if (win) {
          clearInterval(this.loadedPinger)
          setTimeout(() => {
            alert(`you win! You completed the challenge!`)
          }, 300)
          return
        }

        const time = Math.round(this.timer.getTime() / 1000)
        document.documentElement.style.setProperty('--timer', `'${time}s'`)
        document.documentElement.style.setProperty('--win', `'0'`)
      }, 100)
      this.loadedTimer = null
    }, 4000)
  }
}

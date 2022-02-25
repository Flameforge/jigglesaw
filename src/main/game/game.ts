import Grid from './grid'
import Timer from './timer'

export default class Game {
  loadedTimer: null
  loadedPinger: null
  timer: Timer
  public constructor() {
    this.loadedTimer = null
    this.loadedPinger = null
    this.timer = new Timer()
  }
  public start(canvas: HTMLMapElement) {
    console.log('🚀 ~ file: game.ts ~ line 13 ~ Game ~ start')

    Grid.shuffle(canvas)
  }
}

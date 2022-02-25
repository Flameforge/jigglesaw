import Timer from './game/timer'
import UrlInput from './settings/image/url-input'
import ImageRandomButton from './settings/image/random-button'
import ImageSection from './settings/image/image-section'
import GridSection from './settings/grid/grid-section'
import ImageLoadButton from './settings/image/load-button'
import Grid from './game/grid'
import StartButton from './game/start-button'

export default class Main {
  imageInput: UrlInput
  imageLoadButton: ImageLoadButton
  timer: Timer
  loadedTimer: null
  loadedPinger: null
  imageRandomButton: ImageRandomButton
  grid: Grid
  startButton: StartButton
  canvas: HTMLMapElement

  public constructor() {
    this.grid = new Grid()
    this.timer = new Timer()
    this.imageInput = new UrlInput()
    this.imageLoadButton = new ImageLoadButton()
    this.imageRandomButton = new ImageRandomButton()
    this.startButton = new StartButton()
    this.loadedTimer = null
    this.loadedPinger = null
    this.canvas = document.createElement('map')
  }

  public start(container: HTMLElement | null): void {
    if (!container) throw new Error('no container')

    const main = document.createElement('main')

    const title = document.createElement('h2')
    title.textContent = 'Settings'
    main.appendChild(title)

    const imageSection = new ImageSection()
    imageSection.start(main)

    const gridSection = new GridSection()
    gridSection.start(main, this)

    this.canvas.id = 'canvas'
    this.grid.start(this.canvas)
    main.appendChild(this.canvas)

    this.startButton.start(main)

    container.appendChild(main)
  }
}

import Game from '../game/game'
import ColumnsInput from './grid/columns-input'
import Grid from './grid/grid'
import RowsInput from './grid/rows-input'
import ImageLoadButton from './image/load-button'
import ImageRandomButton from './image/random-button'
import UrlInput from './image/url-input'
import StartButton from './start-button'

export default class Main {
  grid: Grid
  startButton: StartButton
  map: HTMLMapElement
  game: Game
  columnsInput: ColumnsInput
  rowsInput: RowsInput
  imageInput: UrlInput
  imageLoadButton: ImageLoadButton
  imageRandomButton: ImageRandomButton

  public constructor() {
    this.imageInput = new UrlInput()
    this.imageLoadButton = new ImageLoadButton()
    this.imageRandomButton = new ImageRandomButton()
    this.columnsInput = new ColumnsInput()
    this.rowsInput = new RowsInput()
    this.grid = new Grid()
    this.game = new Game()
    this.startButton = new StartButton()
    this.map = document.createElement('map')
  }

  public start(container: HTMLElement): void {
    const main = document.createElement('main')

    const title = document.createElement('h2')
    title.textContent = 'Settings'
    main.appendChild(title)

    // Image Settings section
    const imageSection = document.createElement('section')

    this.imageInput.start(imageSection)
    this.imageLoadButton.start(imageSection, this)
    this.imageRandomButton.start(imageSection, this)

    main.appendChild(imageSection)

    // Grid Settings section
    const gridSection = document.createElement('section')

    const subtitle = document.createElement('p')
    subtitle.textContent = `Setup the Grid`
    gridSection.appendChild(subtitle)

    this.columnsInput.start(gridSection, this)
    this.rowsInput.start(gridSection, this)

    main.appendChild(gridSection)

    // Other stuff
    this.map.id = 'grid'

    window.addEventListener('load', () => this.grid.start(this))

    main.appendChild(this.map)

    this.startButton.start(main, this)

    container.appendChild(main)
  }
}

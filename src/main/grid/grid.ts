import { getColumns, getImage, getRows } from '../../common'
import Main from '../main'

export default class Grid {
  public constructor() {}

  public start(main: Main) {
    const columns = getColumns()
    const rows = getRows()
    const gridSize = Number(columns) * Number(rows)

    Grid.clean(main.map, main)

    for (let i = 0; i < gridSize; i++) {
      const area = document.createElement('area')
      area.setAttribute('data-order', String(i))
      area.style.order = String(i)
      area.draggable = true

      area.addEventListener('dragstart', (e) => Grid.onDragStart(e))
      area.addEventListener('dragover', (e) => Grid.onDragOver(e))
      area.addEventListener('dragleave', (e) => Grid.onDragLeave(e))
      area.addEventListener('drop', (e) => Grid.onDragDrop(e, main))

      const originalOrder = Number(area.dataset.order)
      const initialRow = Math.ceil((originalOrder + 1) / Number(columns))
      const initialColumn = (originalOrder % Number(columns)) + 1

      // Getting the height of the container as the image is set to background-position: cover;
      // We need to calculate the position of the background of each square in the grid
      const width = main.map.clientWidth
      const height = main.map.clientHeight

      // Loading a temp image to get the size of the image once loaded
      const tempImage = new Image()
      tempImage.src = getImage()
      const imageHeight = tempImage.height
      const imageWidth = tempImage.width

      // Adjusting if the container or the image are in landscape or portrait mode
      const imageRatio = imageWidth / imageHeight
      const containerRatio = width / height

      let realWidth
      let realHeight

      if (containerRatio > imageRatio) {
        realWidth = width
        realHeight = width / imageRatio
      } else {
        realWidth = height * imageRatio
        realHeight = height
      }

      // Adjusting for outer borders 1px each
      realWidth += 2
      realHeight += 2

      const realBackgroundSize = `${realWidth}px ${realHeight}px`

      area.style.backgroundSize = realBackgroundSize

      const areaPositionX = width / Number(columns)
      const areaPositionY = height / Number(rows)
      const shrinkWidth = (realWidth - width) / 2
      const shrinkHeight = (realHeight - height) / 2

      // Calculating the correspondent position X and Y of the background
      // based on the size of the square, the image and the canvas
      area.style.backgroundPositionX =
        -areaPositionX * (initialColumn - 1) - shrinkWidth - 1 + 'px'
      area.style.backgroundPositionY =
        -areaPositionY * (initialRow - 1) - shrinkHeight - 1 + 'px'

      main.map.appendChild(area)
    }
  }

  private static clean(container: HTMLElement, main: Main): void {
    const oldAreas = document.querySelectorAll('area')
    for (const area of oldAreas) {
      area.removeEventListener('dragstart', (e) => Grid.onDragStart(e))
      area.removeEventListener('dragover', (e) => Grid.onDragOver(e))
      area.removeEventListener('dragleave', (e) => Grid.onDragLeave(e))
      area.removeEventListener('drop', (e) => Grid.onDragDrop(e, main))
      container.removeChild(area)
    }
  }

  public static shuffle(container: HTMLElement): void {
    const size = container.childElementCount

    const areas = container.children as HTMLCollectionOf<HTMLElement>
    // We create an array from 1 to $size
    // We put each element in the array in an object, and give it a random sort key
    // We sort using the random key
    const shuffled = [...Array(size).keys()]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

    // change the order in the grid
    const oldAreasOrder = []
    const newAreasOrder = []
    for (const area of areas) {
      const newOrder = shuffled[0]
      oldAreasOrder.push(area.style.order)
      newAreasOrder.push(String(newOrder))
      area.style.order = String(newOrder)
      shuffled.shift()
    }

    // hmm nasty, shuffle again
    let sameOrder = oldAreasOrder === newAreasOrder
    if (sameOrder) this.shuffle(container)
  }

  private static onDragDrop(event: DragEvent, main: Main): void {
    if (!event.dataTransfer) return

    const target = event.target as HTMLElement
    const targetOrder = target.style.order
    const sourceOrder = event.dataTransfer?.getData('text')
    const sources = Array.from(
      document.querySelectorAll<HTMLElement>('[data-order]')
    )

    const source = sources.find((x) => x.style.order === sourceOrder)
    if (source) {
      source.style.order = targetOrder
      target.style.removeProperty('background-color')
    }

    target.style.order = sourceOrder
    target.style.removeProperty('background-color')

    main.game.checkWin()
  }

  private static onDragLeave(event: DragEvent): void {
    const target = event.target as HTMLElement
    target.style.removeProperty('background-color')
  }

  private static onDragOver(event: DragEvent): void {
    event.preventDefault()
    const target = event.target as HTMLElement
    target.style.backgroundColor = 'rgba(30, 144, 255, 0.5)'
  }

  private static onDragStart(event: DragEvent): void {
    const target = event.target as HTMLElement
    const order = target.style?.order || ''
    event.dataTransfer?.setData('text/plain', order)
  }
}

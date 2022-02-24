export function shuffle(canvasId: string): void {
  const canvas = document.getElementById(canvasId)
  if (!canvas) return

  const image = getComputedStyle(document.documentElement).getPropertyValue(
    '--image-url'
  )

  const size = canvas.childElementCount

  const shuffled = [...Array(size).keys()]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  const squares = canvas.children as HTMLCollectionOf<HTMLElement>

  for (const square of squares) {
    const newOrder = shuffled[0]
    square.style.order = String(newOrder)
    square.style.backgroundImage = `url(${image})`

    const cols = Number(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--grid-columns'
      )
    )

    const rows = size / cols

    const originalOrder = Number(square.dataset.order)
    const initialRow = Math.ceil((originalOrder + 1) / cols)
    const initialColumn = (originalOrder % cols) + 1

    const tempImage = new Image()
    tempImage.src = image
    const imageHeight = tempImage.height
    const imageWidth = tempImage.width

    const width = canvas.clientWidth
    const height = canvas.clientHeight

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

    realWidth += 2
    realHeight += 2

    square.style.backgroundSize = `${realWidth}px ${realHeight}px`

    const squareSizeHorizontal = width / cols
    const squareSizeVertical = height / rows

    const shrinkWidth = (realWidth - width) / 2
    const shrinkHeight = (realHeight - height) / 2

    square.style.backgroundPositionX =
      -squareSizeHorizontal * (initialColumn - 1) - shrinkWidth - 1 + 'px'
    square.style.backgroundPositionY =
      -squareSizeVertical * (initialRow - 1) - shrinkHeight - 1 + 'px'

    shuffled.shift()
  }
}

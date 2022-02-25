import { getImage, setImage, setTimer } from '../../../common'
import Main from '../../main'

export default class ImageLoadButton {
  public constructor() {}

  public start(container: HTMLElement, main: Main) {
    const button = document.createElement('button')
    button.id = 'set-url'
    button.type = 'button'
    button.textContent = '↵ load image'
    button.addEventListener('click', () => {
      setImage(main.imageInput.input.value)
      setTimer(0)
      main.game.stop(main.canvas)

      const tempImage = new Image()
      tempImage.addEventListener('load', () => main.grid.start(main))
      tempImage.src = getImage()
    })

    container.appendChild(button)
  }
}

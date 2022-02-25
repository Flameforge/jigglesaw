import { getImage, setImage } from '../../../common'
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

      const tempImage = new Image()
      tempImage.addEventListener('load', () => main.grid.start(main.canvas))
      tempImage.src = getImage()
    })

    container.appendChild(button)
  }
}

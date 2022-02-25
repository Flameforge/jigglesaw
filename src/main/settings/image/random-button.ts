import { getImage, setImage } from '../../../common'
import Main from '../../main'

export default class ImageRandomButton {
  public constructor() {}

  public start(container: HTMLElement, main: Main) {
    const button = document.createElement('button')
    button.id = 'reset-url'
    button.type = 'button'
    button.textContent = '🐱 random'

    button.addEventListener('click', () => {
      main.game.stop(main.canvas)

      const randomHeight = Math.floor(Math.random() * 799) + 401
      const randomWidth = Math.floor(Math.random() * 799) + 401

      const imageUrl = getImage()
      const removeDefaultValues = imageUrl.split('/').slice(0, -2).join('/')
      const newUrl = `${removeDefaultValues}/${randomWidth}/${randomHeight}`

      main.imageInput.input.value = newUrl
      setImage(newUrl)

      const tempImage = new Image()
      tempImage.addEventListener('load', () => main.grid.start(main))
      tempImage.src = getImage()
    })

    container.appendChild(button)
  }
}

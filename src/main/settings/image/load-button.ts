import { setImage } from '../../../common'
import UrlInput from './url-input'

export default class ImageLoadButton {
  public constructor() {}

  public start(container: HTMLElement, that: UrlInput) {
    const button = document.createElement('button')
    button.id = 'set-url'
    button.type = 'button'
    button.textContent = '↵ load image'
    button.addEventListener('click', () => setImage(that.input.value))
    container.appendChild(button)
  }
}

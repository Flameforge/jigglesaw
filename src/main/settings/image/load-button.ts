import UrlInput from './url-input'
import { setImage } from './image-section'

export default class ImageLoadButton {
  public constructor() {}
  public start(container: HTMLElement | null, that: UrlInput) {
    if (!container) throw new Error('no container')

    const button = document.createElement('button')
    button.id = 'set-url'
    button.type = 'button'
    button.textContent = '↵ load image'
    button.addEventListener('click', () => setImage(that.input.value))
    container.appendChild(button)
  }
}

import UrlInput from './url-input'
import { getImage, setImage } from './image-section'

export default class ImageRandomButton {
  public constructor() {}
  public start(container: HTMLElement | null, that: UrlInput) {
    if (!container) throw new Error('no container')

    const button = document.createElement('button')
    button.id = 'reset-url'
    button.type = 'button'
    button.textContent = '🐱 random'

    button.addEventListener('click', () => {
      const randomHeight = Math.floor(Math.random() * 799) + 401
      const randomWidth = Math.floor(Math.random() * 799) + 401

      const imageUrl = getImage()
      const removeDefaultValues = imageUrl.split('/').slice(0, -2).join('/')
      const newUrl = `${removeDefaultValues}/${randomWidth}/${randomHeight}`

      that.input.value = newUrl
      setImage(newUrl)
    })
    container.appendChild(button)
  }
}

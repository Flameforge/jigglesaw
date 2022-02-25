import UrlInput from './url-input'
import ImageLoadButton from './load-button'
import ImageRandomButton from './random-button'

export default class ImageSection {
  imageInput: UrlInput
  imageLoadButton: ImageLoadButton
  imageRandomButton: ImageRandomButton
  public constructor() {
    this.imageInput = new UrlInput()
    this.imageLoadButton = new ImageLoadButton()
    this.imageRandomButton = new ImageRandomButton()
  }
  public start(container: HTMLElement | null) {
    if (!container) throw new Error('no container')

    const section = document.createElement('section')

    this.imageInput.start(section)
    this.imageLoadButton.start(section, this.imageInput)
    this.imageRandomButton.start(section, this.imageInput)

    container.appendChild(section)
  }
}

export function getImage(): string {
  const cssValue = getComputedStyle(document.documentElement).getPropertyValue(
    '--image-url'
  )
  const removeUrlEncapsulation = cssValue
    .substring(4, cssValue.length - 1)
    .replace(/["]+/g, '')
  return removeUrlEncapsulation
}

export function setImage(url: string) {
  document.documentElement.style.setProperty('--image-url', `url("${url}")`)
}

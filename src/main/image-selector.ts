export class ImageSelector {
  public static create(): HTMLElement {
    const image = getComputedStyle(document.documentElement).getPropertyValue(
      '--image-url'
    )

    const section = document.createElement('section')

    const imageUrlLabel = document.createElement('label')
    imageUrlLabel.textContent = `Choose an image`
    imageUrlLabel.setAttribute('for', 'image-url')

    const input = document.createElement('input')
    input.id = 'image-url'
    input.type = 'url'
    input.setAttribute('placeholder', image)
    input.value = image + '/300/300'

    // input.addEventListener('keydown', (e) => {
    //   if (e.key === 'Enter') {
    //     Main.loadGame(canvas, input.value)
    //   }
    // })
    const imageUrlSet = document.createElement('button')
    imageUrlSet.id = 'set-url'
    imageUrlSet.type = 'button'
    imageUrlSet.textContent = '↵ load image'
    // imageUrlSet.addEventListener('click', () => this.loadGame(canvas))

    const imageUrlRandom = document.createElement('button')
    imageUrlRandom.id = 'reset-url'
    imageUrlRandom.type = 'button'
    imageUrlRandom.textContent = '🐱 random'

    // imageUrlRandom.addEventListener('click', () => {
    //   const randomHeight = Math.floor(Math.random() * 799) + 401
    //   const randomWidth = Math.floor(Math.random() * 799) + 401
    //   imageUrl.value = `${placeholderImage}/${randomWidth}/${randomHeight}`

    //   this.loadGame(canvas)
    // })

    section.appendChild(imageUrlLabel)
    section.appendChild(input)
    section.appendChild(imageUrlSet)
    section.appendChild(imageUrlRandom)
    return section
  }
}

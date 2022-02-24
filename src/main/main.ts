import { Canvas } from './canvas'
import { Grid } from './grid'
import { shuffle } from './shuffle'
import { Timer } from './timer'
import { ImageSelector } from './image-selector'

export class Main {
  public timer: Timer
  private loadedPinger: any
  private loadedTimer: any
  public constructor() {
    this.timer = new Timer()
    this.loadedTimer = null
    this.loadedPinger = null
  }

  public loadGame(canvas: HTMLElement): void {
    Canvas.loadImage(canvas)
    new Grid(canvas)
    this.timer.stop()
    this.timer.reset()
    document.documentElement.style.setProperty('--timer', `''`)
    clearTimeout(this.loadedTimer)
    clearInterval(this.loadedPinger)

    const overlay = document.getElementById('overlay')
    if (overlay) canvas.removeChild(overlay)
  }

  public start(container: HTMLElement | null): void {
    if (!container) throw new Error('no container')

    const image = getComputedStyle(document.documentElement).getPropertyValue(
      '--image-url'
    )

    const main = document.createElement('main')

    const canvas = Canvas.create()

    const h2 = document.createElement('h2')
    h2.textContent = 'Settings'

    const imageSelector = ImageSelector.create()

    const gridSelector = document.createElement('section')

    const gridSelectorLabel = document.createElement('p')
    gridSelectorLabel.textContent = `Setup the Grid`

    const gridColumns = document.createElement('input')
    gridColumns.id = 'grid-columns'
    gridColumns.type = 'number'
    gridColumns.min = '2'
    gridColumns.max = '12'
    gridColumns.value = '3'
    gridColumns.addEventListener('change', () => {
      document.documentElement.style.setProperty(
        '--grid-columns',
        String(gridColumns.value)
      )
      this.loadGame(canvas)
    })

    const gridColumnsLabel = document.createElement('label')
    gridColumnsLabel.textContent = `Columns`
    gridColumnsLabel.setAttribute('for', gridColumns.id)

    const gridRows = document.createElement('input')
    gridRows.id = 'grid-rows'
    gridRows.type = 'number'
    gridRows.min = '2'
    gridRows.max = '12'
    gridRows.value = '4'
    gridRows.addEventListener('change', () => {
      document.documentElement.style.setProperty(
        '--grid-rows',
        String(gridRows.value)
      )
      this.loadGame(canvas)
    })
    const gridRowsLabel = document.createElement('label')
    gridRowsLabel.textContent = `Rows`
    gridRowsLabel.setAttribute('for', gridRows.id)

    const callToAction = document.createElement('button')
    callToAction.textContent = `Start`
    callToAction.type = 'button'
    callToAction.id = 'cta'
    callToAction.classList.add('next')

    callToAction.addEventListener('click', (e) => {
      callToAction.disabled = true
      this.loadGame(canvas)

      shuffle('canvas')

      document.documentElement.style.setProperty('--win', '')

      const overlay = document.createElement('div')
      overlay.id = 'overlay'
      canvas.appendChild(overlay)
      document.documentElement.style.setProperty('--timer', `''`)

      this.loadedTimer = setTimeout((x) => {
        canvas.removeChild(overlay)
        this.timer.reset()
        this.timer.start()
        document.documentElement.style.setProperty('--timer', `'0s'`)

        this.loadedPinger = setInterval(() => {
          const win =
            getComputedStyle(document.documentElement).getPropertyValue(
              '--win'
            ) === '1'

          if (win) {
            clearInterval(this.loadedPinger)
            setTimeout(() => {
              alert(`you win! You completed the challenge!`)
            }, 300)
            return
          }

          const time = Math.round(this.timer.getTime() / 1000)
          document.documentElement.style.setProperty('--timer', `'${time}s'`)
          document.documentElement.style.setProperty('--win', `'0'`)
        }, 100)
        this.loadedTimer = null
        callToAction.disabled = false
      }, 4000)
    })

    // canvas.appendChild(timerContainer);

    main.appendChild(h2)
    main.appendChild(imageSelector)

    // imageSelector.appendChild(imageUrlLabel)
    // imageSelector.appendChild(imageUrl)
    // imageSelector.appendChild(imageUrlSet)
    // imageSelector.appendChild(imageUrlRandom)

    gridSelector.appendChild(gridSelectorLabel)
    gridSelector.appendChild(gridRowsLabel)
    gridSelector.appendChild(gridRows)
    gridSelector.appendChild(gridColumnsLabel)
    gridSelector.appendChild(gridColumns)

    new Grid(canvas)

    main.appendChild(gridSelector)
    main.appendChild(canvas)

    main.appendChild(callToAction)

    container.appendChild(main)

    Canvas.loadImage(canvas)
  }
}

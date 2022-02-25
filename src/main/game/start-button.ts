import Main from '../main'

export default class StartButton {
  constructor() {}
  public start(container: HTMLElement | null, main: Main) {
    if (!container) throw new Error('no container')

    const button = document.createElement('button')
    button.textContent = `Start`
    button.type = 'button'
    button.id = 'cta'
    button.classList.add('next')

    button.addEventListener('click', (e) => {
      // button.disabled = true
      // console.log(
      //   '🚀 ~ file: start-button.ts ~ line 56 ~ StartButton ~ button.addEventListener ~ e',
      //   e
      // )
      main.game.start(main.canvas)

      //   this.loadGame(button)

      //   shuffle('canvas')

      //   document.documentElement.style.setProperty('--win', '')

      //   const overlay = document.createElement('div')
      //   overlay.id = 'overlay'
      //   button.appendChild(overlay)
      //   document.documentElement.style.setProperty('--timer', `''`)

      //   this.loadedTimer = setTimeout((x) => {
      //     button.removeChild(overlay)
      //     this.timer.reset()
      //     this.timer.start()
      //     document.documentElement.style.setProperty('--timer', `'0s'`)

      //     this.loadedPinger = setInterval(() => {
      //       const win =
      //         getComputedStyle(document.documentElement).getPropertyValue(
      //           '--win'
      //         ) === '1'

      //       if (win) {
      //         clearInterval(this.loadedPinger)
      //         setTimeout(() => {
      //           alert(`you win! You completed the challenge!`)
      //         }, 300)
      //         return
      //       }

      //       const time = Math.round(this.timer.getTime() / 1000)
      //       document.documentElement.style.setProperty('--timer', `'${time}s'`)
      //       document.documentElement.style.setProperty('--win', `'0'`)
      //     }, 100)
      //     this.loadedTimer = null
      //     button.disabled = false
      //   }, 4000)
    })

    container.appendChild(button)
  }
}

// public loadGame(): void {
//   console.log('🚀 ~ file: main.ts ~ line 25 ~ Main ~ loadGame ~ loadGame')
//   // this.canvas.loadImage()
//   // new Grid(this.canvas)
//   // this.timer.stop()
//   // this.timer.reset()
//   // document.documentElement.style.setProperty('--timer', `''`)
//   // clearTimeout(this.loadedTimer)
//   // clearInterval(this.loadedPinger)
//   // const overlay = document.getElementById('overlay')
//   // if (overlay) this.canvas.removeChild(overlay)
// }

import Main from './main'

export default class StartButton {
  constructor() {}

  public start(container: HTMLElement, main: Main) {
    const button = document.createElement('button')
    button.textContent = `Start`
    button.type = 'button'
    button.id = 'start'
    button.addEventListener('click', (e) => main.game.start(main.canvas))

    container.appendChild(button)
  }
}

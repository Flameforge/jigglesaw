import { getRows, setRows } from '../../common'
import Main from '../main'

export default class RowsInput {
  public constructor() {}

  public start(container: HTMLElement, main: Main) {
    const label = document.createElement('label')
    label.textContent = `Rows`
    label.setAttribute('for', 'grid-rows')

    const input = document.createElement('input')
    input.id = 'grid-rows'
    input.type = 'number'
    input.min = '2'
    input.max = '12'
    input.value = getRows()
    input.addEventListener('change', (e) => {
      setRows(Number(input.value))
      main.grid.start(main)
    })

    container.appendChild(label)
    container.appendChild(input)
  }
}

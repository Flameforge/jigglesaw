import { getColumns, setColumns } from '../../../common'
import Main from '../../main'

export default class ColumnsInput {
  public constructor() {}
  public start(container: HTMLElement | null, main: Main) {
    if (!container) throw new Error('no container')

    const label = document.createElement('label')
    label.textContent = `Columns`
    label.setAttribute('for', 'grid-columns')

    const input = document.createElement('input')
    input.id = 'grid-columns'
    input.type = 'number'
    input.min = '2'
    input.max = '12'
    input.value = getColumns()
    input.addEventListener('change', (e) => {
      setColumns(Number(input.value))
      main.grid.start(main.canvas)
    })

    container.appendChild(label)
    container.appendChild(input)
  }
}

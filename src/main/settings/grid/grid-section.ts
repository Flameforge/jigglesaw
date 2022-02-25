import Main from '../../main'
import ColumnsInput from './columns-input'
import RowsInput from './rows-input'

export default class GridSection {
  columnsInput: ColumnsInput
  rowsInput: RowsInput
  public constructor() {
    this.columnsInput = new ColumnsInput()
    this.rowsInput = new RowsInput()
  }
  public start(container: HTMLElement | null, main: Main) {
    if (!container) throw new Error('no container')

    const section = document.createElement('section')

    const title = document.createElement('p')
    title.textContent = `Setup the Grid`
    section.appendChild(title)

    this.columnsInput.start(section, main)
    this.rowsInput.start(section, main)

    container.appendChild(section)
  }
}

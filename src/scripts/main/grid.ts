export class Grid {
  public constructor(canvas: HTMLElement) {
    const columns = getComputedStyle(document.documentElement).getPropertyValue(
      '--grid-columns'
    );

    const rows = getComputedStyle(document.documentElement).getPropertyValue(
      '--grid-rows'
    );

    const gridSize = Number(columns) * Number(rows);

    Grid.clean(canvas);

    for (let i = 0; i < gridSize; i++) {
      const square = document.createElement('area');
      square.setAttribute('data-order', String(i));
      square.style.order = String(i);
      square.draggable = true;

      square.addEventListener('dragstart', (e) => Grid.onDragStart(e));
      square.addEventListener('dragover', (e) => Grid.onDragOver(e));
      square.addEventListener('dragleave', (e) => Grid.onDragLeave(e));
      square.addEventListener('drop', (e) => Grid.onDragDrop(e));

      canvas.appendChild(square);
    }
  }

  private static clean(canvas: HTMLElement): void {
    const oldGrid = document.querySelectorAll('area');
    for (const cell of oldGrid) {
      cell.removeEventListener('dragstart', (e) => Grid.onDragStart(e));
      cell.removeEventListener('dragover', (e) => Grid.onDragOver(e));
      cell.removeEventListener('dragleave', (e) => Grid.onDragLeave(e));
      cell.removeEventListener('drop', (e) => Grid.onDragDrop(e));
      canvas.removeChild(cell);
    }
  }

  private static onDragDrop(event: DragEvent): void {
    if (!event.dataTransfer) return;

    const target = event.target as HTMLElement;
    const targetOrder = target.style.order;
    const sourceOrder = event.dataTransfer?.getData('text');
    const sources = Array.from(
      document.querySelectorAll<HTMLElement>('[data-order]')
    );
    const source = sources.find((x) => x.style.order === sourceOrder);
    if (source) {
      source.style.order = targetOrder;
      target.style.removeProperty('background-color');
    }

    target.style.order = sourceOrder;
    target.style.removeProperty('background-color');
  }

  private static onDragLeave(event: DragEvent): void {
    const target = event.target as HTMLElement;
    target.style.removeProperty('background-color');
  }

  private static onDragOver(event: DragEvent): void {
    event.preventDefault();
    const target = event.target as HTMLElement;
    target.style.backgroundColor = 'rgba(30, 144, 255, 0.5)';
  }

  private static onDragStart(event: DragEvent): void {
    const target = event.target as HTMLElement;
    const order = target.style?.order || '';
    event.dataTransfer?.setData('text/plain', order);
  }
}

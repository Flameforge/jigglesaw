export class Canvas {
  public static id = 'canvas';
  public static create(): HTMLMapElement {
    const canvas = document.createElement('map');
    canvas.id = this.id;

    return canvas;
  }

  public static loadImage(canvas: HTMLElement, image: string): void {
    canvas.style.backgroundImage = `url(${image})`;
  }
}

export class Canvas {
  public static id = 'canvas';
  public static create(placeholderImage: string): HTMLMapElement {
    const canvas = document.createElement('map');
    canvas.id = this.id;
    canvas.style.backgroundImage = `url(${placeholderImage})`;

    return canvas;
  }

  public static imageLoad(canvas: HTMLElement, image: string): void {
    canvas.style.backgroundImage = `url(${image})`;
  }
}

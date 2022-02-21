export class Title {
  //   public constructor(public placeholderImage: string) {}
  public static create(): HTMLHeadingElement {
    const h2 = document.createElement('h2');
    h2.textContent = `Settings`;

    return h2;
  }
}

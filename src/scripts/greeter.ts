export class Greeter {
  public constructor(public greeting: string, public author: string) { }
  public start(container: HTMLElement | null): void {
    if (!container) {
      throw new Error('no container');
    }
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = `Welcome to ${this.greeting}!`;

    const subtitle = document.createElement('p');
    subtitle.innerHTML = `Developed with love by <em><a href="https://about.me/bpalma/getstarted" target="_blank">${this.author}</a></em>`;

    header.appendChild(h1);
    header.appendChild(subtitle);
    container.appendChild(header);
  }
}

import { scrollTo } from './common';

export class Greeter {
  public constructor(public greeting: string, public author: string) {}
  public start(container: HTMLElement | null): void {
    if (!container) {
      throw new Error('no container');
    }

    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = `${this.greeting}!`;

    const subtitle = document.createElement('p');
    subtitle.innerHTML = `made with love by <em><a href="https://about.me/bpalma/getstarted" target="_blank">${this.author}</a></em>`;

    const callToAction = document.createElement('button');
    callToAction.textContent = `Play`;
    callToAction.type = 'button';

    callToAction.addEventListener(
      'click',
      () => {
        const anchor = document.querySelector(
          'main>h2:first-of-type'
        ) as HTMLElement;
        if (anchor) setTimeout(() => scrollTo(anchor), 150);
      },
      false
    );

    header.appendChild(h1);
    header.appendChild(subtitle);
    header.appendChild(callToAction);
    container.appendChild(header);

    callToAction.focus();
  }
}

import { doc } from 'prettier';
import { Canvas } from './main/canvas';
import { Grid } from './main/grid';
import { shuffle } from './main/shuffle';

export class Main {
  public start(container: HTMLElement | null, placeholderImage: string): void {
    if (!container) throw new Error('no container');

    const main = document.createElement('main');

    const defaultUrl = 'https://placekitten.com/g/300/300';

    const canvas = Canvas.create();

    const h2 = document.createElement('h2');
    h2.textContent = 'Settings';

    const imageSelector = document.createElement('section');

    const imageUrl = document.createElement('input');
    imageUrl.id = 'image-url';
    imageUrl.type = 'url';
    imageUrl.setAttribute('placeholder', placeholderImage);
    imageUrl.value = defaultUrl;

    imageUrl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        Canvas.loadImage(canvas, imageUrl.value);
        new Grid(canvas);
      }
    });

    const imageUrlSet = document.createElement('button');
    imageUrlSet.id = 'set-url';
    imageUrlSet.type = 'button';
    imageUrlSet.textContent = '↵ load image';
    imageUrlSet.addEventListener('click', () => {
      Canvas.loadImage(canvas, imageUrl.value);
      new Grid(canvas);
    });

    const imageUrlRandom = document.createElement('button');
    imageUrlRandom.id = 'reset-url';
    imageUrlRandom.type = 'button';
    imageUrlRandom.textContent = '🐱 random';

    imageUrlRandom.addEventListener('click', () => {
      const randomHeight = Math.floor(Math.random() * 799) + 401;
      const randomWidth = Math.floor(Math.random() * 799) + 401;
      imageUrl.value = `${placeholderImage}/${randomWidth}/${randomHeight}`;
      Canvas.loadImage(canvas, imageUrl.value);
      new Grid(canvas);
    });

    const imageUrlLabel = document.createElement('label');
    imageUrlLabel.textContent = `Choose an image`;
    imageUrlLabel.setAttribute('for', imageUrl.id);

    const gridSelector = document.createElement('section');

    const gridSelectorLabel = document.createElement('p');
    gridSelectorLabel.textContent = `Setup the Grid`;

    const gridColumns = document.createElement('input');
    gridColumns.id = 'grid-columns';
    gridColumns.type = 'number';
    gridColumns.min = '2';
    gridColumns.max = '12';
    gridColumns.value = '3';
    gridColumns.addEventListener('change', () => {
      document.documentElement.style.setProperty(
        '--grid-columns',
        String(gridColumns.value)
      );
      new Grid(canvas);
    });

    const gridColumnsLabel = document.createElement('label');
    gridColumnsLabel.textContent = `Columns`;
    gridColumnsLabel.setAttribute('for', gridColumns.id);

    const gridRows = document.createElement('input');
    gridRows.id = 'grid-rows';
    gridRows.type = 'number';
    gridRows.min = '2';
    gridRows.max = '12';
    gridRows.value = '4';
    gridRows.addEventListener('change', () => {
      document.documentElement.style.setProperty(
        '--grid-rows',
        String(gridRows.value)
      );
      new Grid(canvas);
    });
    const gridRowsLabel = document.createElement('label');
    gridRowsLabel.textContent = `Rows`;
    gridRowsLabel.setAttribute('for', gridRows.id);

    const callToAction = document.createElement('button');
    callToAction.textContent = `Start`;
    callToAction.type = 'button';
    callToAction.classList.add('next');
    callToAction.addEventListener('click', () => {
      shuffle('canvas', imageUrl.value);
      startCountdown('canvas');
    });

    main.appendChild(h2);
    main.appendChild(imageSelector);

    imageSelector.appendChild(imageUrlLabel);
    imageSelector.appendChild(imageUrl);
    imageSelector.appendChild(imageUrlSet);
    imageSelector.appendChild(imageUrlRandom);

    gridSelector.appendChild(gridSelectorLabel);
    gridSelector.appendChild(gridRowsLabel);
    gridSelector.appendChild(gridRows);
    gridSelector.appendChild(gridColumnsLabel);
    gridSelector.appendChild(gridColumns);

    new Grid(canvas);

    main.appendChild(gridSelector);
    main.appendChild(canvas);
    main.appendChild(callToAction);

    container.appendChild(main);

    Canvas.loadImage(canvas, imageUrl.value);
  }
}

function startCountdown(elementId: string) {
  const canvas = document.getElementById(elementId);
  if (!canvas) return;

  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  canvas.appendChild(overlay);
  setTimeout((x) => {
    canvas.removeChild(overlay);
  }, 4000);
}

export class Main {
  public constructor(public imgUrl: string) {}
  public start(container: HTMLElement | null, placeholderImage: string): void {
    if (!container) {
      throw new Error('no container');
    }

    const main = document.createElement('main');

    const canvasSection = document.createElement('section');

    const canvas = document.createElement('div');
    canvas.id = 'canvas';
    canvas.style.backgroundImage = `url(https://66.media.tumblr.com/7ad1f786107789425fab91f6931244eb/tumblr_pi3imctSHJ1rxktx7_540.jpg)`;

    const h2 = document.createElement('h2');
    h2.textContent = `Settings`;

    const imageSelector = document.createElement('section');

    const imageUrl = document.createElement('input');
    imageUrl.id = 'image-url';
    imageUrl.type = 'url';
    imageUrl.setAttribute('placeholder', placeholderImage);
    imageUrl.value = `https://66.media.tumblr.com/7ad1f786107789425fab91f6931244eb/tumblr_pi3imctSHJ1rxktx7_540.jpg`;
    imageUrl.addEventListener('click', () => imageLoad(canvas), false);
    imageUrl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        imageLoad(canvas);
      }
    });

    const imageUrlSet = document.createElement('button');
    imageUrlSet.id = 'set-url';
    imageUrlSet.type = 'button';
    imageUrlSet.textContent = '↵ load image';
    imageUrlSet.addEventListener('click', () => imageLoad(canvas), false);

    const imageUrlRandom = document.createElement('button');
    imageUrlRandom.id = 'reset-url';
    imageUrlRandom.type = 'button';
    imageUrlRandom.textContent = '🐱 random';

    imageUrlRandom.addEventListener('click', () => {
      const randomHeight = Math.floor(Math.random() * 1199) + 1;
      const randomWidth = Math.floor(Math.random() * 1199) + 1;
      imageUrl.value = `${placeholderImage}/${randomWidth}/${randomHeight}`;
      imageLoad(canvas);
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
    gridColumns.min = '3';
    gridColumns.max = '12';
    gridColumns.value = '6';
    gridColumns.addEventListener('change', () => gridLoad(canvas), false);

    const gridColumnsLabel = document.createElement('label');
    gridColumnsLabel.textContent = `Columns`;
    gridColumnsLabel.setAttribute('for', gridColumns.id);

    const gridRows = document.createElement('input');
    gridRows.id = 'grid-rows';
    gridRows.type = 'number';
    gridRows.min = '3';
    gridRows.max = '12';
    gridRows.value = '6';
    gridRows.addEventListener('change', () => gridLoad(canvas), false);

    const gridRowsLabel = document.createElement('label');
    gridRowsLabel.textContent = `Rows`;
    gridRowsLabel.setAttribute('for', gridRows.id);

    const callToAction = document.createElement('button');
    callToAction.textContent = `Start`;
    callToAction.type = 'button';
    callToAction.classList.add('next');

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

    canvasSection.appendChild(canvas);

    main.appendChild(gridSelector);
    main.appendChild(canvasSection);
    main.appendChild(callToAction);

    container.appendChild(main);

    function imageLoad(image: Element) {
      canvas.style.backgroundImage = `url(${imageUrl.value})`;
    }

    function gridLoad(image: Element) {
      console.log(
        '🚀 ~ file: main.ts ~ line 84 ~ Main ~ gridLoad ~ image',
        image
      );
    }
  }
}

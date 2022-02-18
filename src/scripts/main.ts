import { removeAllChildNodes } from './common';

// export class Canvas {
//   public constructor(public imgUrl: string) {}
// }

export class Main {
  public constructor(public imgUrl: string) {}
  public start(container: HTMLElement | null, placeholderImage: string): void {
    if (!container) {
      throw new Error('no container');
    }

    const main = document.createElement('main');

    const canvasSection = document.createElement('section');

    // const defaultUrl = 'https://placekitten.com/g/1200/1200';
    const defaultUrl = `https://66.media.tumblr.com/7ad1f786107789425fab91f6931244eb/tumblr_pi3imctSHJ1rxktx7_540.jpg`;
    const canvas = document.createElement('map');
    canvas.id = 'canvas';
    canvas.style.backgroundImage = `url(${defaultUrl})`;

    const h2 = document.createElement('h2');
    h2.textContent = `Settings`;

    const imageSelector = document.createElement('section');

    const imageUrl = document.createElement('input');
    imageUrl.id = 'image-url';
    imageUrl.type = 'url';
    imageUrl.setAttribute('placeholder', placeholderImage);
    imageUrl.value = defaultUrl;
    imageUrl.addEventListener(
      'click',
      () => {
        imageLoad(canvas);
        removeAllChildNodes(canvas);
        gridLoad(canvas);
      },
      false
    );
    imageUrl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        imageLoad(canvas);
        removeAllChildNodes(canvas);
        gridLoad(canvas);
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
      const randomHeight = Math.floor(Math.random() * 799) + 401;
      const randomWidth = Math.floor(Math.random() * 799) + 401;
      imageUrl.value = `${placeholderImage}/${randomWidth}/${randomHeight}`;
      imageLoad(canvas);
      removeAllChildNodes(canvas);
      gridLoad(canvas);
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
    gridColumns.value = '2';
    gridColumns.addEventListener('change', () => gridLoad(canvas), false);

    const gridColumnsLabel = document.createElement('label');
    gridColumnsLabel.textContent = `Columns`;
    gridColumnsLabel.setAttribute('for', gridColumns.id);

    const gridRows = document.createElement('input');
    gridRows.id = 'grid-rows';
    gridRows.type = 'number';
    gridRows.min = '2';
    gridRows.max = '12';
    gridRows.value = '2';
    gridRows.addEventListener('change', () => gridLoad(canvas), false);

    const gridRowsLabel = document.createElement('label');
    gridRowsLabel.textContent = `Rows`;
    gridRowsLabel.setAttribute('for', gridRows.id);

    const callToAction = document.createElement('button');
    callToAction.textContent = `Start`;
    callToAction.type = 'button';
    callToAction.classList.add('next');
    callToAction.addEventListener(
      'click',
      () => {
        const renderedCanvas = document.getElementById('canvas');
        if (renderedCanvas) shuffle('canvas', imageUrl.value);
      },
      false
    );

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
    gridLoad(canvas);

    main.appendChild(gridSelector);
    main.appendChild(canvasSection);
    main.appendChild(callToAction);

    container.appendChild(main);

    function imageLoad(image: Element) {
      canvas.style.backgroundImage = `url(${imageUrl.value})`;
    }

    function gridLoad(canvas: HTMLElement) {
      const cols = Number(gridColumns.value);
      const rows = Number(gridRows.value);
      const gridSize = cols * rows;

      removeAllChildNodes(canvas);
      [...Array(gridSize).keys()].forEach((x) => {
        const square = document.createElement('area');
        square.setAttribute('data-order', String(x));
        square.style.order = String(x);
        // square.textContent = String(x);
        canvas.appendChild(square);
      });

      document.documentElement.style.setProperty(
        '--grid-columns',
        String(cols)
      );
    }

    function shuffle(canvasId: string, image: string) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;

      const size = canvas.childElementCount;

      const shuffled = [...Array(size).keys()]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      const squares = canvas.children as HTMLCollectionOf<HTMLElement>;

      for (const square of squares) {
        const newOrder = shuffled[0];

        square.style.order = String(newOrder);
        square.style.backgroundImage = `url(${image})`;
        square.style.backgroundClip = 'border-box';

        const cols = Number(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--grid-columns'
          )
        );
        const rows = size / cols;

        const originalOrder = Number(square.dataset.order);
        // const originalOrder = newOrder;
        const initialRow = Math.ceil((originalOrder + 1) / cols);
        const initialColumn = (originalOrder % cols) + 1;

        square.setAttribute('data-row', String(initialRow));
        square.setAttribute('data-column', String(initialColumn));

        const tempImage = new Image();
        tempImage.src = image;
        const imageHeight = tempImage.height;
        const imageWidth = tempImage.width;

        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        const imageRatio = imageWidth / imageHeight;

        const containerRatio = width / height;

        let realWidth;
        let realHeight;

        if (containerRatio > imageRatio) {
          realWidth = width;
          realHeight = width / imageRatio;
        } else {
          realWidth = height * imageRatio;
          realHeight = height;
        }

        realWidth += 2;
        realHeight += 2;

        square.style.backgroundSize = `${realWidth}px ${realHeight}px`;

        const squareSizeHorizontal = width / cols;
        const squareSizeVertical = height / rows;

        const shrinkWidth = (realWidth - width) / 2;
        const shrinkHeight = (realHeight - height) / 2;

        square.style.backgroundPositionX =
          -squareSizeHorizontal * (initialColumn - 1) - shrinkWidth - 1 + 'px';

        square.style.backgroundPositionY =
          -squareSizeVertical * (initialRow - 1) - shrinkHeight - 1 + 'px';

        shuffled.shift();
      }
    }
  }
}

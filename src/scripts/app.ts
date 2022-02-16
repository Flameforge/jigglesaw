import '../styles/app.scss';

import { Greeter } from './greeter';
import { Main } from './main';

const greeter: Greeter = new Greeter('Jigsaw puzzle', '@bpalma');
const main: Main = new Main('Jigsaw puzzle');
const placeholderImage = 'https://placekitten.com/g';

const app = document.getElementById('app');
if (app) {
  greeter.start(app);
  main.start(app, placeholderImage);
}

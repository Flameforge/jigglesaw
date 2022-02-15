import '../styles/app.scss';

import { Greeter } from './greeter';

const greeter: Greeter = new Greeter('wagawin');
const app = document.getElementById('app');
if (app) {
  greeter.start(app);
}


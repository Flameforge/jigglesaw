import './app.scss'

import { Greeter } from './greeter/greeter'
import { Main } from './main/main'

const greeter: Greeter = new Greeter('Jigsaw puzzle', '@bpalma')
const main: Main = new Main()
const placeholderImage = 'https://placekitten.com/g'

const app = document.getElementById('app')
if (app) {
  greeter.start(app)
  main.start(app, placeholderImage)
}

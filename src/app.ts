import './app.scss'

import { Greeter } from './greeter/greeter'
import { Main } from './main/main'

const greeter: Greeter = new Greeter('Jigsaw puzzle', '@bpalma')
const image = 'https://placekitten.com/g/300/400'
const rows = 2
const columns = 2

document.documentElement.style.setProperty('--grid-rows', String(rows))
document.documentElement.style.setProperty('--grid-columns', String(columns))
document.documentElement.style.setProperty('--image-url', image)

const main: Main = new Main()
const app = document.getElementById('app')
if (app) {
  greeter.start(app)
  main.start(app)
}

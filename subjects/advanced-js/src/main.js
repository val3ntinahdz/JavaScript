import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { environmentComponents } from './concepts/environments'
import { callbacksComponent } from './concepts/callbacks'
import { promiseComponent } from './concepts/promises'
import { promiseRaceComponent } from './concepts/promises-race'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`
// render environment variables outputs in the main card
const element = document.querySelector(".card");
// environmentComponents(element);
// callbacksComponent(element);
// promiseComponent(element);
promiseRaceComponent(element);

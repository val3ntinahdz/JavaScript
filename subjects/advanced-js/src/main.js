import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { environmentComponents } from './concepts/environments'
import { callbacksComponent } from './concepts/02-callbacks'
import { promiseComponent } from './concepts/03-promises'
import { promiseRaceComponent } from './concepts/04-promises-race'
import { asyncComponent } from './concepts/05-async'
import { asyncAwaitComponent } from './concepts/06-async-await'
import { asyncAwait2Component } from './concepts/07-async-await'

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
// promiseRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
asyncAwait2Component(element);
import ReactDOM from 'react-dom'
import App from 'components/app'
import { createStore, applyMiddleware } from 'redux';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import expect from 'expect'
import deepFreeze from 'deepfreeze'

const counter = (state = { number: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, number: state.number + 1 }
        case 'DECREMENT':
            return { ...state, number: state.number - 1 }
        default:
            return state
    }
}

const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  // Note: DockMonitor is visible by default.
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'
               defaultIsVisible={true}>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

const render = () => {
    ReactDOM.render(<div><App store={store} /><DevTools store={store} /></div>, document.getElementById('app'))
}

const store = createStore(counter, DevTools.instrument())
store.subscribe(render)
render()

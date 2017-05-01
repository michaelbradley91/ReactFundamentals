import ReactDOM from 'react-dom'
import App from 'components/app'
import { createStore } from 'redux'
import expect from 'expect'
import deepFreeze from 'deepfreeze'

const reducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                text: action.text,
                completed: false
            }]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        default:
            return state
    }
}

const render = () => {
    ReactDOM.render(<App store={store} />, document.getElementById('app'))
}

const store = createStore(reducer)
//render()

const testAddTodo = () => {
    const stateBefore = []
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    }
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
        reducer(stateBefore, action)
    ).toEqual(stateAfter)
}

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: false
        }
    ]
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    }
    const stateAfter =[
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: true
        }
    ]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
        reducer(stateBefore, action)
    ).toEqual(stateAfter)
}

testAddTodo()
testToggleTodo()
console.log('All tests passed')
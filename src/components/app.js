import TodosList from './todos-list'
import CreateTodo from './create-todo'

const todos = [
    {
        task: 'make React tutorial',
        isCompleted: true
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
]

export default class App extends React.Component {
    constructor() {
        super()
        
        this.state = {
            todos
        }
    }

    createTodo(todo) {
        let task = {
            task: todo,
            isCompleted: false
        }
        this.setState({ todos: [...this.state.todos, task] })
    }

    deleteTodo(todo) {
        this.setState({ todos: this.state.todos.filter(t => t.task !== todo)})
    }

    updateTodo(index, newTodo) {
        this.state.todos[index] = {
            task: newTodo,
            isCompleted: false
        }

        this.setState({ todos: this.state.todos })
    }

    render() {
        return (
            <div>
                <h1>React ToDos App</h1>
                <CreateTodo createTodo={this.createTodo.bind(this)} />
                <TodosList 
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo.bind(this)}
                    updateTodo={this.updateTodo.bind(this)}
                />
            </div>
        )
    }
}

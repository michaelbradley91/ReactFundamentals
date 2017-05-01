export default class CreateTodo extends React.Component {
    
    onCreate(event) {
        event.preventDefault()

        this.props.createTodo(this.refs.todoText.value)
    }
    
    render() {
        return (
            <form onSubmit={this.onCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do?" ref="todoText" />
                <button>Create</button>
            </form>
        )
    }
}
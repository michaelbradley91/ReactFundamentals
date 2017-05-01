import TodosListItem from './todos-list-item'

export default class TodosListBody extends React.Component {

    renderItems() {
        return this.props.todos.map((todo, index) => (
            <TodosListItem
                key={index} {...todo} 
                deleteTodo={this.props.deleteTodo}
                updateTodo={this.props.updateTodo}
                index={index}
            />
        ))
    }
    
    render() {
        return (
            <tbody>
                {this.renderItems()}
            </tbody>
        )
    }
}
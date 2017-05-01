export default class TodosListItem extends React.Component {
    
    constructor() {
        super()

        this.state = {
            isEditing: false,
        }
    }

    onEditClick() {
        this.setState({ isEditing: true })
    }

    onCancelClick() {
        this.setState({ isEditing: false })
    }

    onDeleteClick() {
        this.props.deleteTodo(this.props.task)
    }

    onSaveClick() {
        this.props.updateTodo(this.props.index, this.refs.editText.value)
        this.setState({ isEditing: false })
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <div>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </div>
            )
        }

        return (
            <div>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
            </div>
        )
    }
    
    renderTaskSection() {
        const {task, isCompleted} = this.props

        if (this.state.isEditing) {
            return (
                <input type="text" ref="editText" defaultValue={this.props.task} />
            )
        }

        const taskStyle = {
            color: isCompleted ? 'green': 'red',
            cursor: 'pointer'
        }

        return <div style={taskStyle}>{this.props.task}</div>
    }

    render() {
        return (
            <tr>
                <td>{this.renderTaskSection()}</td>
                <td>
                    {this.renderActionSection()}
                </td>
            </tr>
        )
    }
}
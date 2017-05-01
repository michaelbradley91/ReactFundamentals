import TodosListHeader from './todos-list-header'
import TodosListBody from './todos-list-body'

export default class TodosList extends React.Component {
    render() {
        return (
            <table>
                <TodosListHeader />
                <TodosListBody {...this.props} />
            </table>
        )
    }
}

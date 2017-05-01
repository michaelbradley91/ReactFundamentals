
export default class App extends React.Component {

    onIncrement() {
        this.props.store.dispatch({ type: 'INCREMENT' })
    }

    onDecrement() {
        this.props.store.dispatch({ type: 'DECREMENT' })
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <h1>{this.props.store.getState()}</h1>
                <input type="button" value="Increment" onClick={this.onIncrement.bind(this)} />
                <input type="button" value="Decrement" onClick={this.onDecrement.bind(this)} />
            </div>
        )
    }
}

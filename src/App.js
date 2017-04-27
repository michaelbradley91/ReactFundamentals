import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    let txt = this.props.txt
    return (
    <div>
      <h1>{txt}</h1>
    </div>
    )
  }
}

App.propTypes = {
  cat: PropTypes.string.isRequired
}

export default App
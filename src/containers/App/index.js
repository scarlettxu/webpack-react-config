import React, { PureComponent, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.object.isRequired,
};
class App extends PureComponent {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
      );
  }
}
App.propTypes = propTypes;
export default App;

import React, { PureComponent, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions';
const propTypes = {
  children: PropTypes.object.isRequired,
};
class App extends PureComponent {

  componentDidMount() {
    const name = 'alsotang';
    this.props.actions.getUserName(name).then((res) => {
      console.log(this.props.userName);
     
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
      );
  }
}
App.propTypes = propTypes;
function mapStateToProps(state) {
  return {
    userName: state.userName,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


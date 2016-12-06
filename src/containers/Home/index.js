import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import styles from './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loading from 'react-loading';
import * as userActions from '../../actions';
import { PostItem } from '../../components';
class Home extends PureComponent {
  componentDidMount() {
    const name = 'SevenSharp';
    setTimeout(() => {
      this.props.actions.getUserName(name);
    }, 5000);
  }
  render() {
    let comp = <div className={styles.loading}><Loading type="spinningBubbles" color="#61dafb" /></div>;
    if (this.props.userName.loaded) {
      comp = <PostItem post = {this.props.userName.data} />;
    }
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to React </h2>
        </div>
        <p className={styles.intro}>
          To get started, edit <code>src/*.js</code> and save to reload.
        </p>
        {comp}
        <Link to="/login" >Login</Link>
      </div>);
  }
}
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
)(Home);


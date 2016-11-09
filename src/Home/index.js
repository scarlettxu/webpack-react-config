import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import styles from './App.css';
class Home extends PureComponent {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to React </h2>
        </div>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/login" >Login</Link>
      </div>
    );
  }
}

export default Home;

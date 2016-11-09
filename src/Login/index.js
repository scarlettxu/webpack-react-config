import React from 'react';
import { Link } from 'react-router';
import styles from './Login.css';
function Login() {
  return (
    <div className={styles.root}>
        <div>Hello World</div>
         <Link to="/home" >Home</Link>
      </div>
  );
}
export default Login;

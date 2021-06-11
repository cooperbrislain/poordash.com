import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import styles from './index.css';
import logo from "../../PoorDash-02.svg";

const welcomeStyle = styles.welcome;

const Index = () =>
    <div className="welcome">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>PoorDash</h1>
        <a href="/">Race To The Bottom</a>
    </div>

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { }))(Index);

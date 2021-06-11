import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { compose } from "redux";
import { connect } from "react-redux";
import styles from './index.scss';
import logo from "../../PoorDash-02.svg";
import { Modal, Button } from 'react-bootstrap';

const Welcome = () => {
    const [show, setShow] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="welcome">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>PoorDash</h1>

            <Button className="rttb" variant="primary" onClick={handleShow}>Race To The Bottom</Button>

            <Modal className="choice" show={show}>
                <Modal.Header>
                    <h2>Hungry?</h2>
                </Modal.Header>
                <Modal.Footer>
                    <div className="dd">
                        <Button className="dine">Dine</Button>
                        <Button className="dash">Dash</Button>
                    </div>
                    <p>...</p>
                    <div className="b">
                        <Button className="both">Both?</Button>
                    </div>
                    <div className="wtf">
                        <Link to="/wtf">wtf?</Link>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { }))(Welcome);

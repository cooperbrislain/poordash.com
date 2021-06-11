import React, { useState } from 'react';
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
            <Button variant="primary" onClick={handleShow}>Race To The Bottom</Button>


            <Modal show={show}>
                <Modal.Header>Hungry?</Modal.Header>
                <Modal.Footer>
                    <Button>Dine</Button>
                    <Button>Dash</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { }))(Welcome);

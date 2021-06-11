import React, { useState } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import styles from './index.scss';

const WTF = () => <>What the hell even is this?</>

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { }))(WTF);

import React from "react";
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

 const ModalOverlay = ({onClose}) => {

    return (
        <div className={styles.overlay} onClick={e => onClose()}></div>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
}


export default ModalOverlay;
import React from "react";
import styles from './modal-overlay.module.css';

 const ModalOverlay = ({onClose}) => {

    return (
        <div className={styles.overlay} onClick={e => onClose()}></div>
    )
}

export default ModalOverlay;
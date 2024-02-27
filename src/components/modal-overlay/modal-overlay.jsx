import React from "react";
import styles from './modal-overlay.module.css';

 const ModalOverlay = ({onClose}) => {

    const onOverlayClickHandler = (e) => {
        onClose();
    }

    return (
        <div className={styles.overlay} onClick={() => onOverlayClickHandler()}></div>
    )
}

export default ModalOverlay;
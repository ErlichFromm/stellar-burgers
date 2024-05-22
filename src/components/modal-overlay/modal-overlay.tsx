import React from "react";
import styles from './modal-overlay.module.css';

interface IModalOverlay{
    onClose: () => void;
}

const ModalOverlay:React.FC<IModalOverlay> = (props) => {

    const { onClose } = props;

    return (
        <div className={styles.overlay} onClick={e => onClose()}></div>
    )
}

export default ModalOverlay;
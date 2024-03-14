import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from "./modal.module.css"

const modalRootElement = document.getElementById('modal');

const Modal = ({title, children, onClose}) => {

    useEffect(() => {

        const onEscapePressHandler = (e) => {
            if(e.key === 'Escape'){
                onClose();
            }
        }

        document.addEventListener('keydown', onEscapePressHandler);

        return () => {
            document.removeEventListener('keydown', onEscapePressHandler);
        };
    }, []);

   
    return ReactDOM.createPortal((
        <>
            <div className={styles.modal} >
                <div className={styles.obsessive}>
                    <header className={styles.header}>
                        <h3 className="text text_type_main-medium">{title}</h3>
                        <CloseIcon onClick={e => onClose()}/>
                    </header>
                    <div>
                        {children}
                    </div>
                </div>
                
            </div>
            <ModalOverlay onClick={onClose}/>
        </>
    ), modalRootElement);
}

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired
}

Modal.defaultValue = {
    title: '',
}

export default Modal;
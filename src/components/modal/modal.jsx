import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from "./modal.module.css"

const modalRootElement = document.getElementById('modal');

const Modal = ({title, children, open, onClose}) => {

    useEffect(() => {
        document.addEventListener('keydown', onEscapePressHandler);

        return () => {
            document.removeEventListener('keydown', onEscapePressHandler);
        };
    }, []);


    const onEscapePressHandler = (e) => {
        if(e.key === 'Escape'){
            onClose();
        }
    }

    const onOverlayClickHandler = (e) => {
        if(typeof e.target.className == 'string'){
            if(e.target.className.includes('modal_modal')){
                onClose();
            }
        }
    }

    if(open){
        return ReactDOM.createPortal((
            <>
                <div className={styles.modal} onClick={(e) => onOverlayClickHandler(e)}>
                    <div className={styles.obsessive}>
                        <header className={styles.header}>
                            <h3 className="text text_type_main-medium">{title}</h3>
                            <CloseIcon onClick={onClose}/>
                        </header>
                        <div>
                            {children}
                        </div>
                    </div>
                    
                </div>
                <ModalOverlay/>
            </>
        ), modalRootElement);
    }

    return null;

}

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal;
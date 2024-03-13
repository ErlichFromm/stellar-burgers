import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import {CLOSE_INGREDIENT_MODAL, CLOSE_ORDER_DETAILS_MODAL} from "../../services/actions/modals"

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from "./modal.module.css"

const modalRootElement = document.getElementById('modal');

const Modal = ({title, children}) => {

    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch({type: CLOSE_INGREDIENT_MODAL});
        dispatch({type: CLOSE_ORDER_DETAILS_MODAL});
    }

    useEffect(() => {

        const onEscapePressHandler = (e) => {
            if(e.key === 'Escape'){
                closeModalHandler();
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
                        <CloseIcon onClick={e => closeModalHandler()}/>
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

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
}

Modal.defaultValue = {
    title: '',
}

export default Modal;
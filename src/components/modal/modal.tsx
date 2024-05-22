import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from "./modal.module.css"

const modalRootElement = document.getElementById('modal') as HTMLElement;

interface IModalProps{
    title?: string;
    children: ReactNode;
    onClose: () => void;
}

const Modal:React.FC<IModalProps> = (props) => {

    const {title, children, onClose} = props;

    useEffect(() => {

        const onEscapePressHandler = (e: KeyboardEvent) => {
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
                        <CloseIcon onClick={onClose} type="primary"/>
                    </header>
                    <div>
                        {children}
                    </div>
                </div>
                
            </div>
            <ModalOverlay onClose={onClose}/>
        </>
    ), modalRootElement);
}

export default Modal;
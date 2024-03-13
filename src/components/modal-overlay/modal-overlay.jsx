import React from "react";
import { useDispatch } from "react-redux";
import {CLOSE_INGREDIENT_MODAL, CLOSE_ORDER_DETAILS_MODAL} from "../../services/actions/modals"
import styles from './modal-overlay.module.css';

 const ModalOverlay = () => {

    const dispatch = useDispatch();

    const onOverlayClickHandler = (e) => {
        dispatch({type: CLOSE_INGREDIENT_MODAL});
        dispatch({type: CLOSE_ORDER_DETAILS_MODAL});
    }

    return (
        <div className={styles.overlay} onClick={e => onOverlayClickHandler()}></div>
    )
}

export default ModalOverlay;
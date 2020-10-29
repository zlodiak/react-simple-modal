import React from 'react';
import styles from './modal.module.css';

function Modal(props) {
    if(props.show === 'false') { return null; }
    return(
        <div className={ styles.modal }>
            { props.children }
            <br/>
            <button onClick={ () => { props.closeCallback() } }>close</button>
        </div>
    );
}

export default Modal;
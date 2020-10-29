import React, { useState } from 'react';
import Modal from '../modal/index';

function Page1() {
    const [modalState, setModalState] = useState(false);

    const toggleModal = e => {
      setModalState(e);
    }

    return(
        <div>
            111
            <br/>
            <button  onClick={ () => toggleModal(true) }> show local Modal </button>
            <Modal show={ modalState } toggleCallback={ toggleModal }>modal message</Modal>
        </div>
    );
}

export default Page1;
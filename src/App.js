import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Modal from './components/modal/index';

function App() {
  const [modalShow, setModalShow] = useState('false');

  const showModal = e => {
    setModalShow('true');
  };

  const closeModal = () => {
    setModalShow('false');
  }

  return (
    <BrowserRouter>
      <div>
        <header className="App">
          <Link to="/page1">page1</Link>
          <Link to="/page2">page2</Link>
        </header>
        <main>
          <Route exact path='/'         render={ () => <Page1/> }/>
          <Route exact path='/page1'    render={ () => <Page1/> }/>
          <Route exact path='/page2'    render={ () => <Page2/> }/>        
        </main>
        <footer>
          <hr/>
          {modalShow}
          <button  onClick={ e => showModal() }> show Modal </button>
        </footer>      
        <Modal show={ modalShow } closeCallback={ closeModal }>modal message</Modal>
      </div>
    </BrowserRouter>
  );
}

export default App;

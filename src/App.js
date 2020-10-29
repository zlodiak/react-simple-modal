import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";

import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';

function App() {
  return (
    <BrowserRouter>
      <header className="App">
        <Link to="/page1">page1</Link>
        <Link to="/page2">page2</Link>
      </header>
      <main>
        <Route exact path='/'         render={ () => <Page1/> }/>
        <Route exact path='/page1'    render={ () => <Page1/> }/>
        <Route exact path='/page2'    render={ () => <Page2/> }/>        
      </main>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { Fragment } from 'react';
import Nav from "./components/Nav";
// import Routing from ".components/Routing";
import Footer from "./components/Footer"

function App() {
  return (
    <Fragment>
        <Nav />
        {/* <Routing /> */}
        <Footer />
    
    </Fragment>
  )
}

export default App;

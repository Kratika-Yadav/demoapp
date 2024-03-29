import logo from './logo.svg';
import './App.css';
import DisplayMultipleData from './components/DisplayMultileData';
import Parent from './hooks/Parent';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './routing components/Home';
import DisplayRes from './components/DisplayRes';
import Statemanagement from './class component/Statemanagement';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <DisplayMultipleData/> */}
        {/* <Navbar/> */}
{/* <DisplayRes/> */}
{/* <Statemanagement/> */}
<Parent/>
     
    </div>
  );


  // return(

  //     <BrowserRouter>
  //     <div className=" App"> 
  //       <Navbar>
  //             <Routes>
  //                   <Route path='/'   element={<Home/>}/>
  //                   <Route path='/fashion'   element={<Home/>}/>
  //                   <Route path='/ electronics'   element={<Home/>}/>
                   
  //             </Routes>

  //       </Navbar>

  //     </div>
  //     </BrowserRouter>
  // )
}

export default App;

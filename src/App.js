import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import MyCart from './Pages/MyCart';
import MyOrder from './Pages/MyOrder';

function App() {
  return (
    <>
   <Router>
   
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cart" element={<MyCart/>}/>
       <Route path="/myorder" element={<MyOrder/>}/>
      


        
      </Routes>
   
    </Router>
    
     

    </>
  );
}

export default App;

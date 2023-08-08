import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import MyCart from './Pages/MyCart';
import MyOrder from './Pages/MyOrder';
import ProductPages from './Pages/ProductPages';
import ProductPageDetails from './Pages/ProductPageDetails';
import ProductPageReview from './Pages/ProductPageReview';

function App() {
  return (
    <>
   <Router>
   
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cart" element={<MyCart/>}/>
       <Route path="/myorder" element={<MyOrder/>}/>
       <Route path="/productpage" element={<ProductPages/>}/>
       <Route path="/productpagedetails" element={<ProductPageDetails/>}/>
       <Route path="/productpagereview" element={<ProductPageReview/>}/>



      


        
      </Routes>
   
    </Router>
    
     

    </>
  );
}

export default App;

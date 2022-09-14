import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainerr/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nanbar from './components/Nanbar/Nanbar';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';




const App = () => {
    

  return(
    <CartProvider>
    <BrowserRouter>
          <Header/>
          <Main/>
          <Routes>
            <Route 
            path='/' 
            element={<ItemListContainer />} 
            />

            

            <Route 
            path='/detail/:id'
            element={<ItemDetailContainer/>}
            />

           <Route
           path='./nanbar' 
           element={<Nanbar />}
            />

            <Route
            path='/category/:categoryName'
            element={<ItemListContainer/>}
            />


              <Route
            path='/cart'
            element={<Cart />}
            />


           </Routes>
        
          

          <Footer/>
    </BrowserRouter>
    </CartProvider>
    );
};

export default App;






//import Counter from './components/Counter/Counter';
//<Counter stock={3} inicial={0} onAdd={onAdd}/>
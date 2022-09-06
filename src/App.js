import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainerr/ItemListContainer';
//import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nanbar from './components/Nanbar/Nanbar';


const App = () => {
    return(
    <BrowserRouter>
          <Header />
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
           element={<Nanbar/>}
            />

            <Route
            path='/category/:categoryName'
            element={<ItemListContainer/>}
            />

           </Routes>
          


          <Footer/>
    </BrowserRouter>
    );
};

export default App;







//<Counter stock={3} inicial={0} onAdd={onAdd}/>
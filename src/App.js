import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainerr/ItemListContainer';
import Counter from './components/Counter/Counter';


const App = () => {

    const onAdd = () =>{
      console.log("este boton sirve para agregar al carrito")
    }

    
    

return (
    <>
        <Header/>
         <Main />
        <ItemListContainer />
       
        <Counter stock={3} inicial={0} onAdd={onAdd}/>
       <Footer/>

    </>
 
);
};

export default App

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




const App = () => {
  //const saludo = 'Que tal';

return (
    <>
        <Header/>
         <Main />
        <ItemListContainer saludo='¡Que tal gente!' />
       <Footer/>

    </>
 
);
};

export default App

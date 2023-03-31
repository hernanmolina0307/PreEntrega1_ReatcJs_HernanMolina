import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda Molina" />
    </div>
  );
}

export default App;

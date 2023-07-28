import "./App.css";
import { NavBar } from "./components/NavBar/NarBar";
import ItemLisContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div>
        <NavBar/>
        <ItemLisContainer greeting={'BIENVENIDOS'}/>
      </div>
      
    </>

  )
}

export default App;

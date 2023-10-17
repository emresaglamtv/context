import './App.css';
import Button from "./components/Button"
import ThemeContext from './context/ThemeContext';


function App() {
  return (
    <ThemeContext.Provider value="dark"> 
      <Button />
    </ThemeContext.Provider> // Provider, data sağlayıcı anlamına gelmektedir. value ile dataları tanımlıyoruz.
  );
}

export default App;

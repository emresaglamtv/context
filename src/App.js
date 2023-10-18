import './App.css';
import Button from "./components/Button"
import {ThemeProvider} from './context/ThemeContext';
import Header from './components/Header';

function App() {
  return ( 
    <ThemeProvider>
      <Header />
      <hr />
      <Button />
    </ThemeProvider>

    // <ThemeContext.Provider value="dark"> 
    //   <Button />
    // </ThemeContext.Provider> // Provider, data sağlayıcı anlamına gelmektedir. value ile dataları tanımlıyoruz.
  );
}

export default App;

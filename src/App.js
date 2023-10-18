import './App.css';
import Container from './components/Container';

import {ThemeProvider} from './context/ThemeContext';

function App() {
  return ( 
    <ThemeProvider>
      <Container />
    </ThemeProvider>

    // <ThemeContext.Provider value="dark"> 
    //   <Button />
    // </ThemeContext.Provider> // Provider, data sağlayıcı anlamına gelmektedir. value ile dataları tanımlıyoruz.
  );
}

export default App;

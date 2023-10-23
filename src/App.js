import './App.css';
import Container from './components/Container';

import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>

    // <ThemeContext.Provider value="dark"> 
    //   <Button />
    // </ThemeContext.Provider> // Provider, data sağlayıcı anlamına gelmektedir. value ile dataları tanımlıyoruz.
  );
}

export default App;

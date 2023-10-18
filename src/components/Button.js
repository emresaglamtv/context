import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  // console.log(data); // App.js içindeki value olan dark datasına erişimi sağlıyoruz. 

  return (
    <div>
      Active Theme: {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Button
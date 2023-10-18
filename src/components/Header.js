import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
        Active Theme {theme}
        <br />
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change theme</button>
    </div>
  )
}

export default Header
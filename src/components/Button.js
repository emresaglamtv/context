import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {
    const data = useContext(ThemeContext);

    // console.log(data); // App.js içindeki value olan dark datasına erişimi sağlıyoruz. 

  return (
    <div>Button ({data})</div>
  )
}

export default Button
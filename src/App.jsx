import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
/* import './App.css' */ //Eliminamos este import debido a que ya borramos el archivo css
import Login from './pages/login'

function App() {
  // const [count, setCount] = useState(0) // Eliminamos porque no se usa

  return (
  <Login/> // Indicamos que la primera pàgina a mostrar es el Login
  )
}

export default App

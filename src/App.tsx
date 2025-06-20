

import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <> 
      <h1 className="text-3xl font-bold underline">    Hello world!  
      <FontAwesomeIcon icon={faCoffee} className="text-2xl text-blue-500" /></h1>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Button from 'react-bootstrap/Button';

function App() {
  const [items, setItems] = useState<string[]>([])

  function addItem(){
    setItems([...items, 'hello'])
  }

  return (
    <>
      <ul>
          {items.map((el,i)=><li key={el+i}>{el}</li>)}
     </ul>
     <Button 
      type='button' 
      variant="primary" 
      size="lg"
      onClick={addItem}
      >Primary</Button>
    </>
  )
}

export default App

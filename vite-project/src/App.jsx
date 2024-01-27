import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const [items, setItems] = useState([])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({ ...prevData, [id]: value }));

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = formData



  }

  return (
    <>
      <div>
        <h1>FORM</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' onInput={handleChange}></input>

            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' onInput={handleChange}></input>

            <button type='submit'>Submit</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default App

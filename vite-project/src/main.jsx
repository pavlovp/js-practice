import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Files from './Files.jsx'
import data from "./getFiles"; // Import data from "./getFiles"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { /* <App /> */}
    <Files data={data}></Files>
  </React.StrictMode>,
)






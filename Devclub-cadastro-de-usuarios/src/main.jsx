import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import 
 App  from './app.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <App />
        <GlobalStyles />
    </React.StrictMode>,
)
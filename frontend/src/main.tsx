
import { createRoot } from 'react-dom/client'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"; 
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
    <ToastContainer/>
      <App />
    </BrowserRouter>
)

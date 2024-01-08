import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import "swiper/css";
import { AppProvider } from './context/app/AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider >
            <App />
        </AppProvider>
    </React.StrictMode>

)

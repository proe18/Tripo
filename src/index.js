import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavbarProvider, GalleryProvider } from './context'
import { StyleProvider } from './GlobalStyles'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NavbarProvider>
                <GalleryProvider>
                    <StyleProvider>
                        <App />
                    </StyleProvider>
                </GalleryProvider>
            </NavbarProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
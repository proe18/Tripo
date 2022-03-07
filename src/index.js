import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavbarProvider, GalleryProvider, ScrollToPositionProvider } from './context'
import { StyleProvider } from './GlobalStyles'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ScrollToPositionProvider>
                <NavbarProvider>
                    <GalleryProvider>
                        <StyleProvider>
                            <App />
                        </StyleProvider>
                    </GalleryProvider>
                </NavbarProvider>
            </ScrollToPositionProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
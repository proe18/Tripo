import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavbarProvider, GamesPageProvider } from './context'
import { StyleProvider } from './GlobalStyles'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NavbarProvider>
                <GamesPageProvider>
                    <StyleProvider>
                        <App />
                    </StyleProvider>
                </GamesPageProvider>
            </NavbarProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
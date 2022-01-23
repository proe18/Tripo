import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { NavbarProvider } from './context/NavbarContext';
import { theme } from './GlobalStyles';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NavbarProvider>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </NavbarProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
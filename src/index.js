import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {
    NavbarProvider,
    GalleryProvider,
    ScrollProvider,
    FormProvider
} from './context'
import { StyleProvider } from './GlobalStyles'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NavbarProvider>
                <ScrollProvider>
                    <GalleryProvider>
                        <FormProvider>
                            <StyleProvider>
                                <App />
                            </StyleProvider>
                        </FormProvider>
                    </GalleryProvider>
                </ScrollProvider>
            </NavbarProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        
                        <Route path='/' element={<Home/>}/>
                    </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    )
}

export default App

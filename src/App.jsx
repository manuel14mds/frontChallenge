import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'
import DataPHContainer from './DataPHContainer/DataPHContainer'
import CommentsPHContainer from './commentsPHContainer/commentsPHContainer'
import NotFound from './NotFound/NotFound'
import RandomContainer from './RandomContainer/RandomContainer'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/placeholder' element={<DataPHContainer />}/>
                        <Route path='/placeholder/post/:postId/comments' element={<CommentsPHContainer />}/>
                        <Route path='/randomdata' element={<RandomContainer />}/>
                        <Route path='/notfound' element={<NotFound />}/>

                        <Route path='*' element={ <Navigate to='/notfound' /> }/>
                    </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    )
}

export default App

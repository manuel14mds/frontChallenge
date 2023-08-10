import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './NavBar.css'
import { Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar-bg" data-bs-theme="light">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand className='nav_text_color'>Home</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/placeholder' className='nav_text_color'>PlaceHolder_API</Link>
                            <Link to="/randomdata" className='nav_text_color' >Random_data_API</Link>
                            <Link to="/pokeapi" className='nav_text_color'>PokeApi</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar

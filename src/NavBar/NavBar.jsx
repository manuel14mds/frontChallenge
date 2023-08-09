import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar-bg" data-bs-theme="light">
                <Container>
                    <Navbar.Brand className='nav_text_color' href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/placeholder" className='nav_text_color'>PlaceHolder_API</Nav.Link>
                            <Nav.Link href="/randomdata" className='nav_text_color'>Random_data_API</Nav.Link>
                            <Nav.Link href="/ramdomdata" className='nav_text_color'>Pokeapi</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar

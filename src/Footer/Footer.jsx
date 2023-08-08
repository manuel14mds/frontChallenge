import { Nav } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer container">
            <h1 className="text-center mt-4 mb-4">This project is builded for a frontend challenge by Manuel Florez </h1>
            <h3 className="text-center mt-4 mb-4">Iglobal Ventures</h3>

            <ul className='footer_list'> 
                <li><a className='link_list' href="https://www.linkedin.com/in/manuel14mds/" target="_blank" >LinkedIn</a></li>
                <li><a className='link_list' href="https://github.com/manuel14mds" target="_blank" >GitHub</a></li>
                <li><a className='link_list' target="_blank" disabled >Portfolio</a></li>
            </ul>
        </div>
    )
}

export default Footer


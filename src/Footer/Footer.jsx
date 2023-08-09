import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Footer.css'

const Footer = () => {
    const Link = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a className='link_list' disabled>{children}</a>
        </OverlayTrigger>
    );
    return (
        <div className="footer container">
            <h1 className="text-center mt-4 mb-4">This project is builded for a frontend challenge by Manuel Florez </h1>
            <h3 className="text-center mt-4 mb-4">Iglobal Ventures</h3>

            <ul className='footer_list'>
                <li><a className='link_list' href="https://www.linkedin.com/in/manuel14mds/" target="_blank" >LinkedIn</a></li>
                <li><a className='link_list' href="https://github.com/manuel14mds" target="_blank" >GitHub</a></li>
                <li>{' '}<Link title="Working..." id="t-1"> portfolio </Link>{' '}</li>
            </ul>
        </div>
    )
}

export default Footer


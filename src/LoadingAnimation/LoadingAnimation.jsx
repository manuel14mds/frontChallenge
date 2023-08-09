import { Spinner } from 'react-bootstrap'
import './LoadingAnimation.css'

const LoadingAnimation = () => {
    return (
        <div className="loadingAnimation">
            Loading Content...  <br />
            <Spinner animation="border" />
        </div>
    )
}

export default LoadingAnimation

import RandomUser from '../RandomUser/RandomUser'
import './RandomContainer.css'

const RandomContainer = () => {
    return (
        <div className='randomContainer'>
            <h1 className='titles'>Random data API</h1>
            <div className="randomBox">
                <div className="randomBoxItem userContiner">{<RandomUser/>}</div>
                <div className="randomBoxItem adressContiner"></div>
                <div className="randomBoxItem bankContiner"></div>
                <div className="randomBoxItem applienceContiner"></div>
                <div className="randomBoxItem beersContiner"></div>
                <div className="randomBoxItem creditCartContiner"></div>
            </div>
        </div>
    )
}

export default RandomContainer

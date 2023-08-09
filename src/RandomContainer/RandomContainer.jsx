import RandomAddress from '../RandomAddress/RandomAddress'
import RandomAppliance from '../RandomAppliance/RandomAppliance'
import RandomBank from '../RandomBank/RandomBank'
import RandomBeer from '../RandomBeer/RandomBeer'
import RandomCreditCard from '../RandomCreditCard/RandomCreditCard'
import RandomUser from '../RandomUser/RandomUser'
import './RandomContainer.css'

const RandomContainer = () => {
    return (
        <div className='randomContainer'>
            <h1 className='titles'>Random data API</h1>
            <div className="randomBox">
                <div className="randomBoxItem userContiner">{<RandomUser />}</div>
                <div className="randomBoxItem adressContiner">{<RandomAddress />}</div>
                <div className="randomBoxItem bankContiner">{<RandomBank />}</div>
                <div className="randomBoxItem applianceContiner">{<RandomAppliance />}</div>
                <div className="randomBoxItem beersContiner">{<RandomBeer />}</div>
                <div className="randomBoxItem creditCartContiner">{<RandomCreditCard />}</div>
            </div>
        </div>
    )
}

export default RandomContainer

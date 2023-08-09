import { useEffect, useState } from 'react'
import './RandomBeer.css'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import RandomDataNotFound from '../RandomDataNotFound/RandomdataNotFound'

const RandomBeer = () => {
    const [beer, setBeer] = useState(null)

    function beerAPI(){
        fetch('https://random-data-api.com/api/v2/beers')
        .then(response => response.json())
        .then(json => setBeer(json))
        .catch(()=> setBeer(-1))
    }

    useEffect(()=>{
        beerAPI()
    },[])
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <button className='btn btn-primary reload_btn' onClick={beerAPI}>Reload</button>
                </div>
                <p className='col-10 data_title'>Random Beer Data</p>
            </div>
            {!beer ?
                <LoadingAnimation />
                :
                beer == -1 ?
                    <RandomDataNotFound />
                    :
                    <div className='beerBox'>
                        <p className="feature-beer-item"><strong>Name:</strong> {beer.name}</p>
                        <p className="feature-beer-item"><strong>Brand:</strong> {beer.brand}</p>
                        <p className="feature-beer-item"><strong>Style:</strong> {beer.style}</p>
                        <p className="feature-beer-item"><strong>HOP:</strong> {beer.hop}</p>
                        <p className="feature-beer-item"><strong>Yeast:</strong> {beer.yeast}</p>
                        <p className="feature-beer-item"><strong>Malts:</strong> {beer.malts}</p>
                        <p className="feature-beer-item"><strong>Alcohol:</strong> {beer.alcohol}</p>
                        <p className="feature-beer-item"><strong>BLG:</strong> {beer.blg}</p>
                    </div>
            }
        </>
    )
}

export default RandomBeer

import { useEffect, useState } from 'react'
import './RandomCreditCard.css'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import RandomDataNotFound from '../RandomDataNotFound/RandomdataNotFound'

const RandomCreditCard = () => {
    const [card, setCard] = useState(null)

    function creditCardAPI(){
        fetch('https://random-data-api.com/api/v2/credit_cards')
        .then(response => response.json())
        .then(json => setCard(json))
        .catch(()=> setCard(-1))
    }

    useEffect(()=>{
        creditCardAPI()
    },[])

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <button className='btn btn-primary reload_btn' onClick={creditCardAPI}>Reload</button>
                </div>
                <p className='col-10 data_title'>Random Credit Card Data</p>
            </div>
            {!card ?
                <LoadingAnimation />
                :
                card == -1 ?
                    <RandomDataNotFound />
                    :
                    <div className='randomCardContainer'>
                        <ul className="card_list_group">
                            <li className="card_list_item"><strong>Credit Card ID:</strong> {card.id}</li>
                            <li className="card_list_item"><strong>card UID:</strong> {card.uid}</li>
                            <li className="card_list_item"><strong>Number:</strong> {card.credit_card_number}</li>
                            <li className="card_list_item"><strong>Expiry date:</strong> {card.credit_card_expiry_date}</li>
                            <li className="card_list_item"><strong>Type:</strong> {card.credit_card_type}</li>
                        </ul>
                    </div>
            }
        </>
    )
}

export default RandomCreditCard

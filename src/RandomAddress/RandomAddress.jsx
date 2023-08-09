import { useEffect, useState } from 'react'
import './RandomAddress.css'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import RandomDataNotFound from '../RandomDataNotFound/RandomdataNotFound'

const RandomAddress = () => {
    const [address, setAddress] = useState(null)

    function addressAPI(){
        fetch('https://random-data-api.com/api/v2/addresses')
        .then(response => response.json())
        .then(json => setAddress(json))
        .catch(()=> setAddress(-1))
    }

    useEffect(()=>{
        addressAPI()
    },[])

    return (
        <>
            <div className="row">
                <div className='col-2'>
                    <button className='btn btn-primary reload_btn' onClick={addressAPI}>Reload</button>
                </div>
                <p className='col-10 data_title'>Random Address Data</p>
            </div>
            {!address ?
                <LoadingAnimation />
                :
                address == -1 ?
                    <RandomDataNotFound />
                    :
                    <div className='container addressContainer'>
                        <ul className="list-group list-group-flush address-list-group">
                            <li className="list-group-item address-list-group-item"><strong>City:</strong> {address.city}</li>
                            <li className="list-group-item address-list-group-item"><strong>Street name:</strong>  {address.street_name}</li>
                            <li className="list-group-item address-list-group-item"><strong>Street address:</strong>  {address.street_address}</li>
                            <li className="list-group-item address-list-group-item"><strong>Building number:</strong> {address.building_number}</li>
                            <li className="list-group-item address-list-group-item"><strong>Zip code:</strong>  {address.zip_code}</li>
                            <li className="list-group-item address-list-group-item"><strong>Mail box:</strong>  {address.mail_box}</li>
                        </ul>
                    </div>
            }
        </>
    )
}

export default RandomAddress

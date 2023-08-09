import { useEffect, useState } from 'react'
import './RandomBank.css'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import RandomDataNotFound from '../RandomDataNotFound/RandomdataNotFound'

const RandomBank = () => {
    const [bank, setBank] = useState(null)

    function bankAPI(){
        fetch('https://random-data-api.com/api/v2/banks')
        .then(response => response.json())
        .then(json => setBank(json))
        .catch(()=> setBank(-1))
    }

    useEffect(()=>{
        bankAPI()
    },[])

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <button className='btn btn-primary reload_btn' onClick={bankAPI}>Reload</button>
                </div>
                <p className='col-10 data_title'>Random Bank Data</p>
            </div>
            {!bank ?
                <LoadingAnimation />
                :
                bank == -1 ?
                    <RandomDataNotFound />
                    :
                    <div className='randomBankContainer'>
                        <ul className="bank_list_group">
                            <li className="bank_list_item"><strong>Bank ID:</strong> {bank.id}</li>
                            <li className="bank_list_item"><strong>Bank:</strong>  {bank.bank_name}</li>
                            <li className="bank_list_item"><strong>Acc number:</strong> {bank.account_number}</li>
                            <li className="bank_list_item"><strong>Iban:</strong> {bank.iban}</li>
                            <li className="bank_list_item"><strong>Routing #:</strong> {bank.routing_number}</li>
                            <li className="bank_list_item"><strong>Swift bic:</strong> {bank.swift_bic}</li>
                        </ul>
                    </div>
            }
        </>
    )
}

export default RandomBank

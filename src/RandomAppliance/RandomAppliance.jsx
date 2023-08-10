import { useEffect, useState } from 'react'
import './RandomAppliance.css'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import RandomDataNotFound from '../RandomDataNotFound/RandomdataNotFound'

const RandomAppliance = () => {
    const [appliance, setAppliance] = useState(null)

    function applianceAPI(){
        fetch('https://random-data-api.com/api/v2/appliances')
        .then(response => response.json())
        .then(json => setAppliance(json))
        .catch(()=> setAppliance(-1))
    }

    useEffect(()=>{
        applianceAPI()
    },[])
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <button className='btn btn-primary reload_btn' onClick={applianceAPI}>Reload</button>
                </div>
                <p className='col-10 data_title'>Random Appliance Data</p>
            </div>
            {!appliance ?
                <LoadingAnimation />
                :
                appliance == -1 ?
                    <RandomDataNotFound />
                    :
                    <div className='container applianceContainer'>
                        <ul className="list-group list-group-horizontal-md appliance_feature">
                            <li className="list-group-item"><strong>Applience ID:</strong></li>
                            <li className="list-group-item flex-fill ">{appliance.id}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal-md appliance_feature">
                            <li className="list-group-item"><strong>Equipment:</strong></li>
                            <li className="list-group-item flex-fill ">{appliance.equipment}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal-md appliance_feature">
                            <li className="list-group-item"><strong>Brand:</strong></li>
                            <li className="list-group-item flex-fill ">{appliance.brand}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal-md appliance_feature">
                            <li className="list-group-item"><strong>UID:</strong></li>
                            <li className="list-group-item flex-fill ">{appliance.uid}</li>
                        </ul>

                    </div>
            }
        </>
    )
}

export default RandomAppliance

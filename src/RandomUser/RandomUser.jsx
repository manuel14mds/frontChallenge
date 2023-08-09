import { useEffect, useState } from 'react'
import './RandomUser.css'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import RandomDataNotFound from '../RandomDataNotFound/RandomdataNotFound'

const RandomUser = () => {
    const [user, setUser] = useState(null)
    function callAPI(){
        fetch(`https://random-data-api.com/api/v2/users`)
        .then(response => response.json())
        .then(json => setUser(json))
        .catch(()=> setData([]))
    }

    useEffect(()=>{
        callAPI()
    },[])
    return (
        <>
            <button className='btn btn-primary reload_btn' onClick={callAPI}>Reload</button>
            {!user ?
                <LoadingAnimation />
                :
                user == -1 ?
                    <RandomDataNotFound />
                    :
                    <div className='row userCard continer'>
                        <div className="userImage col-5">
                            <picture>
                                <source srcset={user.avatar} type="image/svg+xml"/>
                                <img src={user.avatar} className="img-fluid img-thumbnail" alt="..."/>
                            </picture>
                        </div>

                        <div className="col-7 userDataInfo userDataUp">
                            <p className='userData'><strong>ID:</strong>    {user.id}</p>
                            <p className='userData'><strong>First name:</strong>    {user.first_name}</p>
                            <p className='userData'><strong>Last name:</strong>    {user.last_name}</p>
                            <p className='userData'><strong>Gender:</strong>    {user.gender}</p>
                        </div>

                        <div className="col-12 userDataInfo UserDataDown">
                            <p className='userData'><strong>Employment:</strong>    {user.employment.title}</p>
                            <p className='userData'><strong>City:</strong>    {user.address.city}</p>
                            <p className='userData'><strong>State:</strong>    {user.address.state}</p>
                            <p className='userData'><strong>Country:</strong>    {user.address.country}</p>
                        </div>
                    </div>
            }
                    </>
    )
}

            export default RandomUser

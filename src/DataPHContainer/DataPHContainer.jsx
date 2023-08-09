import {useState, useEffect} from 'react'

import Spinner from 'react-bootstrap/Spinner'
import DataPH from '../DataPH/DataPH'
import './DataPHContainer'

const DataPHContainer = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(()=> setData([]))
    },[])
    
    return (
        <>
        <h1 className='titles'>Placeholders API - Posts</h1>
        <br />
        {
            data.length == 0 ? 
                <div className="loadingAnimation">
                    Loading Content...
                    <Spinner animation="border" />
                </div>
            :
                <div className='container-md'>
                    {data.map((item) => ( <DataPH key={item.id} info={item}/> ))}
                </div>
        }
        </>
    )
}

export default DataPHContainer

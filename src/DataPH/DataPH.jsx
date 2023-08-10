import ListGroup from 'react-bootstrap/ListGroup'
import './DataPH.css'
import { Link } from 'react-router-dom'


const DataPH = (info) => {
    return (
        <>
            <ListGroup horizontal={'xl'} className='PHcard'>
                <ListGroup.Item className='PHcardItem' >Post ID: {info.info.id}</ListGroup.Item>
                <ListGroup.Item className='PHcardItem' >Post Title: {info.info.title}</ListGroup.Item>
                <ListGroup.Item className='PHcardItem' >{info.info.body} </ListGroup.Item>
                <ListGroup.Item className='PHcardItem' > <Link className='PHcardBtn btn' to={'/placeholder/post/'+info.info.id+'/comments'} value={info.info.id}>comments</Link> </ListGroup.Item>
            </ListGroup>
            <br />
        </>
    )
}

export default DataPH

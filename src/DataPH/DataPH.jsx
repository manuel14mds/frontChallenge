import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import './DataPH.css'


const DataPH = (info) => {
    return (
        <>
            <ListGroup horizontal={'xl'} className='PHcard'>
                <ListGroup.Item className='PHcardItem' >Post ID: {info.info.id}</ListGroup.Item>
                <ListGroup.Item className='PHcardItem' >Post Title: {info.info.title}</ListGroup.Item>
                <ListGroup.Item className='PHcardItem' >{info.info.body} </ListGroup.Item>
                <ListGroup.Item className='PHcardItem' > <a className='PHcardBtn btn' href={'/placeholder/post/'+info.info.id+'/comments'} value={info.info.id}>comments</a> </ListGroup.Item>
            </ListGroup>
            <br />
        </>
    )
}

export default DataPH

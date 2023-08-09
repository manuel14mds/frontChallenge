import { ListGroup } from "react-bootstrap"

const CommentPH = (info) => {
    return (
        <>
            <ListGroup horizontal={'xl'} className='PHcard'>
                <ListGroup.Item className='PHcardItem' >User Email: {info.info.email}</ListGroup.Item>
                <ListGroup.Item className='PHcardItem' >Name: {info.info.name}</ListGroup.Item>
                <ListGroup.Item className='PHcardItem' >{info.info.body} </ListGroup.Item>
            </ListGroup>
            <br />
        </>
    )
}

export default CommentPH

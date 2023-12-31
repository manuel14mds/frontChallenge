import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import CommentPH from "../CommentPH/CommentPH"
import './CommentsPHContainer.css'
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation"


const CommentsPHContainer = () => {
    const [data, setData] = useState([])
    const {postId} = useParams()

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(()=> setData([]))
    },[])
    
    return (
        <>
        <h1 className='titles'>Placeholders API - Post Comments</h1>
        <br />
        {
            data.length == 0 ? 
                <LoadingAnimation/>
            :
                <div className='container-md'>
                    <h3 className="commentsPostId">Post ID: {postId}</h3>
                    {data.map((item) => ( <CommentPH key={item.id} info={item}/> ))}
                </div>
        }
        </>
    )
}

export default CommentsPHContainer

import {useEffect,useState} from 'react'
function Content() {
    const [title, setTitle] =useState('')
    const [posts, setPost] = useState([])


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json()) // Obj đc convert sang JS
        .then(posts => {
            setPost(posts)
        })
    }, [])
    return (
        <div>
            <input 
                value={title}
                onChange={e=>setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (<li key= {post.id}>{post.title}</li>))}

            </ul>
        </div>
    )

}
export default Content
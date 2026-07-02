import { useState,useEffect } from 'react';
import axios from "axios";

function Feed() {

  const [posts,setPosts] = useState([
    {
      _id: "1",
      caption: "My First post",
      image: "https://images.unsplash.com/photo-1777604305383-f3ab980f524b?q=80&w=695&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ])
  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      console.log(res.data)
      setPosts(res.data.posts)
    })

  },[])

  return (
    <section className='feed-section'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className='post-card'>
            <img src={post.image} alt={post.caption} className='post-image' />
            <p className='post-caption'>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </section>
  )
}

export default Feed;

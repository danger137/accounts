"use client";
import { useEffect, useState } from 'react';
import "./us.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <img 
            src={post.picture} 
            alt={post.title} 
            style={{ width: '80%', maxWidth: '500px', height: 'auto' }} 
          />
          <h2 className="post-title">{post.title}</h2>
          <p className="post-date">{new Date(post.date).toLocaleDateString()}</p> {/* Display date */}
          <p className="post-content">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

"use client";
import { useState } from 'react';
import "./ads.css";
import { toast } from 'react-toastify';


export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [picture, setPicture] = useState(null);
  const [date, setDate] = useState(''); // State for the date



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('picture', picture);
    formData.append('date', date); // Append date to FormData

    const response = await fetch('/api/post', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Reset form after successful upload
      setTitle('');
      setContent('');
      setPicture(null);
      setDate(''); // Reset the date field
      toast.success("Done");
    } else {
      console.error('Failed to create post');
    }
  };

  return (
    <div style={{ background: "#1f272b", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div>
      <div className="admin-panel">
        <h1 className="title">Admin Panel</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="input"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
            className="textarea"
          />
          <input
            type="file"
            onChange={(e) => setPicture(e.target.files[0])}
            required
            className="file-input"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="date-input"
          />
          <button type="submit" className="submit-button mt-5 form-button">Add Post</button>
        </form>
      </div>
    </div>
  </div>
  

  );
}

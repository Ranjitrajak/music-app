import React, { useState } from 'react';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [audio, setAudio] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');

  const handleAddMedia = (type) => {
    // You can implement the logic for adding audio, image, or video here
    alert(`Add ${type} logic goes here!`);
  };

  const handleSubmit = () => {
    // You can implement the logic for submitting the blog post here
    alert('Blog post submitted!');
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Create Blog</h1>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="mt-1 p-2 border rounded-md w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          rows="4"
          className="mt-1 p-2 border rounded-md w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <button className="bg-blue-500 text-white p-2 mr-2" onClick={() => handleAddMedia('audio')}>
          Add Audio
        </button>
        <button className="bg-green-500 text-white p-2 mr-2" onClick={() => handleAddMedia('image')}>
          Add Image
        </button>
        <button className="bg-red-500 text-white p-2" onClick={() => handleAddMedia('video')}>
          Add Video
        </button>
      </div>
      <button className="bg-indigo-500 text-white p-2" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
export default Blog;



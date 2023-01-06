import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const EditBook = () => {
    const location = useLocation();
    console.log(location);
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <h1>Edit Book</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title:</label>
                    <input type="text"
                        id="title"
                        name="title"
                        value={title}
                        required placeholder="Enter Book Title"
                        onChange={(e) => setTitle(e.target.value)}>
                    </input>
                </div>
                <div className="form--field">
                    <label htmlFor="author">Author:</label>
                    <input type="text"
                        id="author"
                        name="author"
                        value={author}
                        required placeholder="Enter Book Title"
                        onChange={(e) => setAuthor(e.target.value)}>
                    </input>
                </div>
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default EditBook;
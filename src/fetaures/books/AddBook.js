import React, { useState } from 'react';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <div>
            <h2>Add book</h2>
            <form >
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
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddBook;
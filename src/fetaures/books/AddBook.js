import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const numberOfBooks = useSelector((state) => state.booksReducer.books.length);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { id: numberOfBooks + 1, title, author };
        dispatch(addBook(book));
        navigate("/show-books");
    };
    return (
        <div>
            <h2>Add book</h2>
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
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddBook;
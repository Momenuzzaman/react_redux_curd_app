import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books);
    console.log(books);
    return (
        <div>
            <h2>List of books</h2>
        </div>
    );
};

export default BooksView;
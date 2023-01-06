import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../fetaures/books/AddBook';
import BooksView from '../fetaures/books/BooksView';
import Navbar from '../layouts/Navbar';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Index = () => {
    return <BrowserRouter>
        <Navbar />
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/show-books' element={<BooksView />} />
                <Route path='/add-book' element={<AddBook />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </main>
    </BrowserRouter>
};

export default Index;
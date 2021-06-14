import React, { useState } from 'react';
import './App.css';
import {books as mockBooks} from './mocks/books'
import {Header, Search, Book} from './components'




function App() {
  const [books, setBooks] = useState(mockBooks)

  const searchBooksByTitle = (term: string) =>{
    const results = mockBooks.filter(book => book.title.toLowerCase().includes(term.toLowerCase()))
    setBooks(results)
  }

  return (
    <>
    <Header title="Bookstore in React by Hackages"></Header>
    <Search onSearch={searchBooksByTitle} ></Search>
    <h3>We have {books.length} book(s) in our library</h3>
    <hr />
    <br />
    <div className="container">
      {books.map(book => <Book key={book.id} {...book}></Book>)}
    </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import { Book, Header } from "./components";
import BookDetails from "./components/BookDetails/book-details";
import { books as mockBooks } from "./mocks/books";

function App() {
  const [books, setBooks] = useState(mockBooks);

  const searchBooksByTitle = (term: string) => {
    const results = mockBooks.filter((book) =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
    setBooks(results);
  };

  return (
    <>
      <Header
        title="Bookstore in React by Hackages"
        onSearch={searchBooksByTitle}
      ></Header>
      {/* <Search onSearch={searchBooksByTitle}></Search> */}
      <div className="books-list">
        <div className="container">
          <h3>
            We have <span>{books.length} book(s)</span> in our library
          </h3>
          <div className="books-grid">
            {books.map((book) => (
              <Book key={book.id} {...book}></Book>
            ))}
          </div>
        </div>
      </div>
      <BookDetails />
    </>
  );
}

export default App;

import React from "react";
import { IBook } from "../../types";

export const Book = (book: IBook) => (
  <div className="item">
    <img src={book.image} alt="" />
    <h4>{book.title}</h4>
    <p>{book.author}</p>
  </div>
);

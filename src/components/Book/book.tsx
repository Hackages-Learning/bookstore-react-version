import React from 'react'
import { IBook } from '../../types'

export const Book = (book: IBook) => (
    <div className="item">
      <a href={book.title} className="module hero">
        {book.title}
      </a>
    </div>
  )
  
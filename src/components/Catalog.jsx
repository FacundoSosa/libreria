import React from 'react'
import booksData from "../data/books.json"
import BookItem from './BookItem'

function Catalog() {
  return (
    <div className='row'>
      {booksData.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  )
}

export default Catalog

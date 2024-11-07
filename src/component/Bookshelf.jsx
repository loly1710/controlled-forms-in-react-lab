//import { useState } from 'react';
const Bookshelf = ({ handleSubmit, handleInputChange, books, newBook }) => {
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="title">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((Bookshelf) => (
          <>
          <ul>
            <li className="bookCard">
            <p>Title: {Bookshelf.title}</p>
            <p>Author: {Bookshelf.author}</p>
            </li>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};
export default Bookshelf;

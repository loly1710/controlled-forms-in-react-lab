// src/App.jsx
import { useState } from "react";
import "./App.css";
import Bookshelf from "./component/Bookshelf";

const App = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const changeBook = {
      ...newBook,
      [name]: value,
    };
    setNewBook(changeBook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({
      title: "",
      author: "",
    });
  };
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        books={books}
        setBooks={setBooks}
        newBook={newBook}
        setNewBook={setNewBook}
      />
    </>
  );
};

export default App;

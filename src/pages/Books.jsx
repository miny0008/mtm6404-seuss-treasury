import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then(response => response.json())
      .then(data => {
        console.log("Books API Response:", data); // Debugging
        setBooks(data);
      })
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h1>Dr. Seuss Books</h1>
      <div className="book-list">
        {books.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <img src={book.image || defaultImage} alt={book.title} />
            <p>{book.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Books;

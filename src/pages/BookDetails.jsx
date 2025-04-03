import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching book with ID:", id); // Debugging

    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Book Details API Response:", data);
        setBook(data);
      })
      .catch(err => {
        console.error("Error fetching book details:", err);
        setError(err.message);
      });
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.image || defaultImage} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetails;

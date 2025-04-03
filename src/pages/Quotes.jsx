import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://seussology.info/api/quotes/random/10");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Remove the argument from json() so it just parses the response.
      const data = await response.json();
      console.log("Quotes API Response:", data); // Debugging
      setQuotes(data);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <h1>Dr. Seuss Quotes</h1>
      <button onClick={fetchQuotes}>Get New Quotes</button>

      {loading ? (
        <p>Loading quotes...</p>
      ) : (
        <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            "{quote.text}" - {quote.book.title}
          </li>
        ))}
      </ul>
      
      )}
    </div>
  );
}

export default Quotes;

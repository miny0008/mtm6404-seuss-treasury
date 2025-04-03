import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comps/Navbar";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;

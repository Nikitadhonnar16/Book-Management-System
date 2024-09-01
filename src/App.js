import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import AddBook from "./Components/AddBook";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllBooks from "./Components/AllBooks";
import BookDetails from "./Components/BookDetails";
import Update from "./Components/Update";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/addbook" element={<AddBook />} />
          <Route exact path="/home" element={<AllBooks />} />
          <Route exact path="/more-details/:id" element={<BookDetails />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

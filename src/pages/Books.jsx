import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import BookService from "../services/book.service";
import Swal from "sweetalert2";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BookService.getAllBook();

        if (response.status === 200) {
          setBooks(response.data); // Make sure this is an array of books
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Books",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.length > 0 &&
          books.map((book) => <BookCard key={book.itemId} book={book} />)}
      </div>
    </div>
  );
};

export default Books;

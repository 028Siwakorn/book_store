import { useState } from "react";
import { useNavigate } from "react-router";
import BookService from "../services/book.service";
import Swal from "sweetalert2";
const AddBooks = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    publishYear: "",
    isbn: "",
    publisher: "",
    edition: "",
    pageCount: "",
    language: "",
    genre: "",
    description: "",
    coverImage: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const newBook = await BookService.createBook(book);
      console.log(newBook);
      if (newBook.status === 200) {
        Swal.fire({
          title: "Add new Book",
          text: "Add new book successfully!",
          icon: "success",
        }).then(() => {
          setBook({
            title: "",
            author: "",
            category: "",
            publishYear: "",
            isbn: "",
            publisher: "",
            edition: "",
            pageCount: "",
            language: "",
            genre: "",
            description: "",
            coverImage: "",
            location: "",
          });
          navigate("/");
        });
      }
      //   ถ้า error จะมาที่นี้เลย
    } catch (error) {
      Swal.fire({
        title: "Add new book",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-2xl font-bold text-gray-800">
            Add New book
          </h2>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              onChange={handleChange}
              value={book.title}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              id="author"
              name="author"
              type="text"
              required
              onChange={handleChange}
              value={book.author}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              required
              onChange={handleChange}
              value={book.category}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="publishYear"
              className="block text-sm font-medium text-gray-700"
            >
              Publish Year
            </label>
            <input
              id="publishYear"
              name="publishYear"
              type="text"
              required
              onChange={handleChange}
              value={book.publishYear}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="isbn"
              className="block text-sm font-medium text-gray-700"
            >
              ISBN
            </label>
            <input
              id="isbn"
              name="isbn"
              type="text"
              required
              onChange={handleChange}
              value={book.isbn}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="publisher"
              className="block text-sm font-medium text-gray-700"
            >
              Publisher
            </label>
            <input
              id="publisher"
              name="publisher"
              type="text"
              required
              onChange={handleChange}
              value={book.publisher}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="edition"
              className="block text-sm font-medium text-gray-700"
            >
              Edition
            </label>
            <input
              id="edition"
              name="edition"
              type="text"
              required
              onChange={handleChange}
              value={book.edition}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="pageCount"
              className="block text-sm font-medium text-gray-700"
            >
              Page Count
            </label>
            <input
              id="pageCount"
              name="pageCount"
              type="number"
              required
              onChange={handleChange}
              value={book.edition}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700"
            >
              Language
            </label>
            <input
              id="language"
              name="language"
              type="text"
              required
              onChange={handleChange}
              value={book.language}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <input
              id="genre"
              name="genre"
              type="text"
              required
              onChange={handleChange}
              value={book.genre}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              required
              onChange={handleChange}
              value={book.description}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="coverImage"
              className="block text-sm font-medium text-gray-700"
            >
              Cover Image
            </label>
            <input
              id="coverImage"
              name="coverImage"
              type="text"
              required
              onChange={handleChange}
              value={book.coverImage}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              onChange={handleChange}
              value={book.location}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;

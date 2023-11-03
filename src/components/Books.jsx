import { Link } from "react-router-dom";
import { books } from "../constants/apidata";
import BookCard from "./BookCard";
import Layout from "./layout/Layout";
//import { useDispatch } from "react-redux";
//import { searchBooks, setBooks } from "../store/books/bookSlice";
import { useState } from "react";

const Books = () => {
  //const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    //   dispatch(searchBooks(searchTerm));
  };

  const handleResetSearch = () => {
    //  dispatch(setBooks(books));
    setSearchTerm("");
  };
  return (
    <Layout>
      <div className="mx-32">
        {/* Search Section */}
        <section className="py-12 flex ">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6 flex justify-center">
              Search Books
            </h2>
            {/* Search form or components go here */}
            {/* Search form or components go here */}
            <form className="flex items-center space-x-4 justify-center">
              <input
                type="text"
                placeholder="Enter book title or author"
                className="w-96 border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-400 focus:outline-none"
                onClick={handleSearch}
              >
                Search
              </button>
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-300 focus:outline-none"
                onClick={handleResetSearch}
              >
                Reset
              </button>
            </form>
          </div>
        </section>

        {/* Featured Books Section */}
        {/* Featured Books Section */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">All Books</h2>
            {/* Featured books content goes here */}
            <div className="flex flex-wrap">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
                >
                  <Link to={`/books/${book.id}`}>
                    <BookCard
                      title={book.title}
                      author={book.author}
                      imageUrl={book.imageUrl}
                      price={book.price}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Books;

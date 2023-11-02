import { books } from "../constants/apidata";
import BookCard from "./BookCard";
import Layout from "./layout/Layout";

const Books = () => {
  return (
    <Layout>
      <div className="mx-32">
        {/* Search Section */}
        <section className="py-12 bg-white flex ">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Search Books</h2>
            {/* Search form or components go here */}
            <form className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Enter book title or author"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* Featured Books Section */}
        {/* Featured Books Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Featured Books</h2>
            {/* Featured books content goes here */}
            <div className="flex flex-wrap">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
                >
                  <BookCard
                    title={book.title}
                    author={book.author}
                    imageUrl={book.imageUrl}
                  />
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

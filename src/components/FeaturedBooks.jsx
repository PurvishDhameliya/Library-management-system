import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import { featuredBooks } from "../constants/apidata";

const FeaturedBooks = () => {
  return (
    <section className="py-12 mx-8 md:mx-16 lg:mx-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Featured Books</h2>
        <div className="flex flex-wrap">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
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
  );
};

export default FeaturedBooks;

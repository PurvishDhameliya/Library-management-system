import { useParams } from "react-router-dom";
import { books, featuredBooks, newArrivals } from "../constants/apidata";
import { addToCart } from "../store/cart/cartSlice";
import { useDispatch } from "react-redux";

const BookDetails = () => {
  // Access the bookId from the URL parameters
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(bookDetails));
  };

  const bookDetails = books.find((book) => book.id === parseInt(id, 10));

  if (!bookDetails) {
    return <div>Book not found</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center">
        <img
          src={
            bookDetails?.imageUrl
            // featuredDetails?.imageUrl ||
            // newAriavalDetails?.imageUrl
          }
          alt={
            bookDetails?.title
            // featuredDetails?.title ||
            // newAriavalDetails?.title
          }
          className="rounded-md w-[400px] h-[400px] object-cover shadow-2xl"
        />
      </div>
      <div className="ml-8">
        <h2 className="text-3xl font-bold mb-2">
          {" "}
          {
            bookDetails?.title
            // featuredDetails?.title ||
            // newAriavalDetails?.title
          }
        </h2>
        <p className="text-gray-600 mb-4">ID: {bookDetails?.id}</p>
        <p className="text-gray-600 mb-4">{bookDetails?.description}</p>
        <p>Price: ${bookDetails?.price}</p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 mt-4"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-700 mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default BookDetails;

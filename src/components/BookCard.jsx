import PropTypes from "prop-types";

const BookCard = ({ title, author, imageUrl, price }) => {
  return (
    <div className="p-4 rounded-md border border-lime-300">
      <img
        src={imageUrl}
        alt={title}
        className="mb-5 rounded-md w-[250px] h-[250px] object-cover shadow-2xl"
      />

      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{author}</p>
        <p className="text-gray-600 mb-4">${price}</p>

        <button className="hover:bg-transparent  text-white hover:text-black border px-2 border-green-500  py-2 rounded-md bg-green-700">
          View Details
        </button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes?.number?.isRequired,
};

export default BookCard;

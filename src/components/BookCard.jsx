const BookCard = ({ title, author, imageUrl }) => {
  return (
    <div className="p-4 rounded-md ">
      <img
        src={imageUrl}
        alt={title}
        className="mb-5 rounded-md w-[250px] h-[250px] object-cover"
      />
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{author}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;

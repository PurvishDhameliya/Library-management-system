import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between bg-gray-50 p-8 text-black">
      <Link to="/home">
        <h1>Book Management System </h1>
      </Link>
      <div className="flex gap-5 mx-4">
        <Link to="/home">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-5">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </header>
  );
};

export default Header;

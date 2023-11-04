import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, logout } from "../../store/authSlice";

const Header = () => {
  const { user, isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
  };

  return (
    <header className="flex justify-between bg-gray-50 p-8 text-black">
      <Link to="/">
        <h1>Book Management System</h1>
      </Link>
      <div className="flex gap-5 mx-4">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-5">
        {isAuthenticated ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

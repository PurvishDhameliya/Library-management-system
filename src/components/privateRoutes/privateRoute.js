// PrivateRoute.js
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/authSlice";

const PrivateRoute = ({ element, ...props }) => {
    const { isAuthenticated } = useSelector(selectAuth);
  
    return isAuthenticated ? (
      <Route {...props} element={element} />
    ) : (
      <Navigate to="/login" replace />
    );
  };

export default PrivateRoute;

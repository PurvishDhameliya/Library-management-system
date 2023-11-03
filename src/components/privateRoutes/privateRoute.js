// PrivateRoute.js
import PropTypes from "prop-types";

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

  PrivateRoute.propTypes = {
    element: PropTypes.string.isRequired,
  };
export default PrivateRoute;

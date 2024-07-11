/* eslint-disable react/prop-types */
// Wrapper Components

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = (props) => {
  const { children } = props

  const { isAuthenticated } = useSelector(state => state.user)

  return isAuthenticated ? children : <Navigate to="/login" />
}
 
export default PrivateRoutes;
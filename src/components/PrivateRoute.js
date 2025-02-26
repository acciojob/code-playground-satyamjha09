import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuth , children }) => {
  return isAuth ? children : <Navigator to="/login" />
}

export default PrivateRoute
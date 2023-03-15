import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    console.log(isLoggedIn)
    if (isLoggedIn) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
};

export default Protected;
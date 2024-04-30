import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ onlyUnAuth = false, element }) => {

    const { isAuthChecked, isAuth } = useSelector((store) => store.user);
    const location = useLocation();

    if (!isAuthChecked) {
        return <p>Загрузка</p>;
    }

    if(location.pathname === '/reset-password' && onlyUnAuth){
        if(!localStorage.getItem('resetPassword')) {
            return <Navigate to='/forgot-password'/>
        }
    }

    if (onlyUnAuth && isAuth) {

        const { from } = location.state || { from: { pathname: "/" } };
        return <Navigate to={from} />;
    }

    if (!onlyUnAuth && !isAuth) {
        return <Navigate to="/sign-in" state={{ from: location }} />;
    }


    return element;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ element }) => (
    <Protected onlyUnAuth={true} element={element} />
);

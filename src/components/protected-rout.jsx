import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ onlyUnAuth = false, element }) => {

  const {isAuthChecked} = useSelector((store) => store.user);
  const user = useSelector((store) => store.user.user);
  const location = useLocation();

  if (!isAuthChecked) {
    console.log(1);
    return <p>Загрузка</p>;
  }

  if (onlyUnAuth && user) {
   
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }


  return element;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ element }) => (
  <Protected onlyUnAuth={true} element={element} />
);


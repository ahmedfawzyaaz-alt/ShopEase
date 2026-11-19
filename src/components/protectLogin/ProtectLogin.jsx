import { useContext } from "react";
import { Authutication } from "../../context/AuthContext";
import Error from "../../pages/error/Error";
import Login from "../../pages/login/Login";

export default function ProtectLogin() {
  const { token } = useContext(Authutication);

  if (token) {
    return <Error />;
  } else {
    return <Login />;
  }
  return <div></div>;
}

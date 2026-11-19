import { useContext } from "react";
import { Authutication } from "../../context/AuthContext";
import Register from "../../pages/register/Register";
import Error from "../../pages/error/Error";

export default function ProtectRegister() {
  const { token } = useContext(Authutication);

  if (token) {
    return <Error />;
  } else {
    return <Register />;
  }
  return <div></div>;
}

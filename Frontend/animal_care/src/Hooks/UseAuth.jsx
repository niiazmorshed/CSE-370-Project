import { useContext } from "react";
import { AuthContext } from "../Provider/ContexProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;

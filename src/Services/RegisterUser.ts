import { useState } from "react";
import ApiClient from "./Api-Client";

const RegisterUser = (userinfo: object) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailExist, setEmailExist] = useState(false);

  setIsLoading(true);
  ApiClient.post("/user/signup", userinfo)
    .then((res) => {
      if (res.status === 208) {
        setEmailExist(true);
        setIsLoading(false);
      }
      if (res.status == 200) {
        setIsLoading(false);
        setSuccess(true);
      }
    })
    .catch((err) => {
      console.log(err.message);
      setIsLoading(false);
    });

  return { isLoading, success, emailExist };
};

export default RegisterUser;

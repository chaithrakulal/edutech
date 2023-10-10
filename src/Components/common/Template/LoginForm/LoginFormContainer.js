import toast from "react-hot-toast";
import { useContext, useState } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import GlobalUserContextProvider from "../../../../Context/GlobalUserContext";
const LoginFomContainer = () => {
  const { setToken } = useContext(GlobalUserContextProvider);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const addUser = await axios.get(
      `http://localhost:4000/User/fetchUser?email=${formData.email}&password=${formData.password}`
    );
    if (addUser?.data?.length) {
      toast.success("User Logged In Successfully!");
      setToken(addUser?.data.length);
      navigate("/");
    } else {
      toast.error("User do not exist. Please Register!");
    }
  };

  return (
    <LoginForm
      handleOnSubmit={handleOnSubmit}
      handleOnChange={handleOnChange}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      showConfirmPassword={showConfirmPassword}
      setShowConfirmPassword={setShowConfirmPassword}
      formData={formData}
    />
  );
};
export default LoginFomContainer;

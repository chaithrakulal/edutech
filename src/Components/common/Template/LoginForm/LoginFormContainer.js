import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import Home from "../../../core/Home/Home";
import Login from "../../../../pages/Login";

const LoginFomContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const userLogin = false;
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSignUp = async () => {
    <Login />;
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const addUser = await axios.get(
      `http://localhost:4000/User/fetchUser?email=${formData.email}&password=${formData.password}`
    );
    if (formData?.password !== formData?.confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    if (addUser) {
      toast.success("User Logged In Successfully!");
      userLogin = true;
      <Home />;
    }
    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
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
      handleOnSignUp={handleOnSignUp}
    />
  );
};
export default LoginFomContainer;

import toast from "react-hot-toast";
import SignupForm from "./SignupForm";
import { useState } from "react";
import axios from "axios";

const SignupFomContainer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const addEntry = async () => {
    try {
      const addUser = await axios.post("http://localhost:4000/User/addUser", {
        firstName: formData.firstName,
        lastName: formData?.lastName,
        email: formData?.email,
        password: formData?.password,
      });
      if (addUser) {
        toast.success("User Registered Successfully!");
      }
    } catch (error) {
      throw error;
    }
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (formData?.password !== formData?.confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    addEntry();
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
    <SignupForm
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
export default SignupFomContainer;

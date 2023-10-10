import { Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = ({
  handleOnSubmit,
  handleOnChange,
  showPassword,
  setShowPassword,
  formData,
}) => {
  const { email, password } = formData;
  return (
    <form
      className="flex w-full flex-col gap-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="w-full">
        Email ID
        <input
          required
          type="email"
          name="email"
          value={email}
          placeholder="John.John@hotmail.com"
          onChange={handleOnChange}
          style={{
            boxShadow: "inset 1px -1px 1px 1px rgba(1, 1, 1, 1)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        />
      </label>
      <div className="flex gap-x-4">
        <label className="relative">
          Password
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            placeholder="password"
            onChange={handleOnChange}
            style={{
              boxShadow: "inset 1px -1px 1px 1px rgba(1, 1, 1, 1)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 bottom-[15px] cursor-pointer"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        onClick={handleOnSubmit}
      >
        Login
      </button>
      <Toaster position="top-right" />
    </form>
  );
};
export default LoginForm;

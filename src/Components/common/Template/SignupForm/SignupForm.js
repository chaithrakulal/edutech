import { Toaster } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Tab from "../../Tab";

const SignupForm = ({
  handleOnSubmit,
  handleOnChange,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  formData,
  tabData,
  accountType,
  setAccountType,
}) => {
  const { firstName, lastName, email, password, confirmPassword } = formData;
  return (
    <div>
      {/* tab  */}
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />
      {/* form  */}
      <form
        className="flex w-full flex-col gap-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex gap-x-4">
          <label>
            First Name
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              placeholder="John"
              onChange={handleOnChange}
              style={{
                boxShadow: "inset 1px -1px 1px 1px rgba(1, 1, 1, 1)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <label>
            Last Name
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              placeholder="John"
              onChange={handleOnChange}
              style={{
                boxShadow: "inset 1px -1px 1px 1px rgba(1, 1, 1, 1)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
        </div>
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
            Create Password
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
          <label className="relative">
            Confirm Password
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              placeholder="password"
              onChange={handleOnChange}
              style={{
                boxShadow: "inset 1px -1px 1px 1px rgba(1, 1, 1, 1)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
          onClick={handleOnSubmit}
        >
          Create Account
        </button>
        <Toaster position="top-right" />
      </form>
    </div>
  );
};
export default SignupForm;

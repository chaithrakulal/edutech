import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import GlobalUserContextProvider from "../../../Context/GlobalUserContext";
const Home = () => {
  const { token, name } = useContext(GlobalUserContextProvider);
  return (
    <div>
      {token ? <div>Hello {name}</div> : null}
      {/* Section 1  */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
        {/* Become an Instructor */}
        <Link to="/signup">
          <div className="group mx-auto mt-16 w-fit rounded-full bg-gray-500 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-gray-600">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Empower Your Future with Coding Skills
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
      </div>
    </div>
  );
};
export default Home;

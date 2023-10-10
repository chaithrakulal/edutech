import { useContext } from "react";
import { GlobalUserContext } from "./Context/GlobalUserContext";

const RandomUseContextTest = () => {
  const context = useContext(GlobalUserContext);
  return <div>{context}</div>;
};
export default RandomUseContextTest;

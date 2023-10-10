import { createContext, useState } from "react";

export const GlobalUserContext = createContext();

const GlobalUserContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const name = "Lavanya";
  return (
    <GlobalUserContext.Provider value={{ name, setToken, token }}>
      {props.children}
    </GlobalUserContext.Provider>
  );
};
export default GlobalUserContextProvider;

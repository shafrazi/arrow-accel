import React, { useState } from "react";

const AppContext = React.createContext(null);

function AppContextProvider(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };

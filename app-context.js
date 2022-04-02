import React, { useState } from "react";

const AppContext = React.createContext(null);

function AppContextProvider(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [sideContent, setSideContent] = useState(null);
  const [linkClicked, setLinkClicked] = useState(false);
  const [linkName, setLinkName] = useState(null);
  const [startLinkAnimation, setStartLinkAnimation] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
        sideContent,
        setSideContent,
        linkClicked,
        setLinkClicked,
        linkName,
        setLinkName,
        startLinkAnimation,
        setStartLinkAnimation,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };

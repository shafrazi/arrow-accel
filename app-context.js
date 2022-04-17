import React, { useState } from "react";

const AppContext = React.createContext(null);

function AppContextProvider(props) {
  const [isOpen, setIsOpen] = useState(false);
  // const [sideContent, setSideContent] = useState(
  //   "T M M is a design studio which delivers graphic design and visual communication to clients and collaborators who are looking for engaging and strong output that is able to challenge expectations and goals."
  // );
  const [sideContent, setSideContent] = useState("");

  const [linkClicked, setLinkClicked] = useState(false);
  const [linkName, setLinkName] = useState("");
  const [targetLink, setTargetLink] = useState("");
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
        targetLink,
        setTargetLink,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };

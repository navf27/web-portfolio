import { createContext, useContext, useState } from "react";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(null);
  const [likeData, setLikeData] = useState([]);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  const onLoveClicked = (id) => {
    const updatedLikeData = likeData?.map((item) => {
      if (item.id === id && item.liked === false) {
        return { ...item, liked: true };
      } else if (item.id === id && item.liked === true) {
        return { ...item, liked: false };
      }
      return item;
    });

    localStorage.setItem("like", JSON.stringify(updatedLikeData));
    setLikeData(updatedLikeData);
  };

  return (
    <MainContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        toggleTheme,
        likeData,
        setLikeData,
        onLoveClicked,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

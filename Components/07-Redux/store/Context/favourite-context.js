import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((currentFavId) => [...currentFavId, id]);
  }
  function removeFavourite(id) {
    setFavouriteMealIds((currentFavId) =>
      currentFavId.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider;

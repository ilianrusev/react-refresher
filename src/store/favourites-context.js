import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  total: 0,
});

function FavouritesContextProvider(props) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(favouriteMeetup) {
    setFavourites((prevFavourites) => {
      return prevFavourites.concat(favouriteMeetup);
    });
  }

  function removeFavourite(meetupId) {
    setFavourites((prevFavourites) => {
      return prevFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function isFavourite(meetupId) {
    return favourites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: favourites,
    total: favourites.length,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;

import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";
import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);

  const isItemFav = favouritesCtx.isFavourite(props.id);

  const toggleFavouriteStatusHandler = () => {
    if (isItemFav) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <Card>
      <li className={styles.item}>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.description}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {isItemFav ? "Remove from Favourites" : "Add to Favourites"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;

import favicon from "../img/star_black_24dp.svg";
import notfav from "../img/star_border_black_24dp.svg";
export default function Star(props) {
  let isfav = props.isFavorite ? favicon : notfav;
  return (
    <img
      src={isfav}
      className="card--favorite"
      onClick={props.handleClick}
      alt="fav image"
    />
  );
}

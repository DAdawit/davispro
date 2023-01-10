export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.item.coverImg} className="card-img" />
      <div className="card-status">
        <span className="material-icons card-star">star_rate</span>
        <span className="gray">{props.rating}</span>
        <span className="gray">{props.item.reviewCount} . </span>
        <span className="gray"> {props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p className="bold">from ${props.item.price}</p>
    </div>
  );
}

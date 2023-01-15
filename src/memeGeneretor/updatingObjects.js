import React from "react";
import favicon from "../img/star_black_24dp.svg";
import notfav from "../img/star_border_black_24dp.svg";
import Star from "./star";
export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */
  // let isfav = contact.isFavorite ? favicon : notfav;

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img
          src="https://imgs.search.brave.com/ZYR0K9sU8H0RaSVO51b_BntoY69c0LbjYsrclT3_4lY/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/enRvd1AzbGp1cDBT/TTc1dGtEaW1RSGFI/YSZwaWQ9QXBp"
          className="card--image"
          alt="profile img"
        />
        <div className="card--info">
          <Star isFavorite={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card--name">John Doe</h2>
          <p className="card--contact">+1 (719) 555-1212</p>
          <p className="card--contact">itsmyrealname@example.com</p>
        </div>
      </article>
    </main>
  );
}

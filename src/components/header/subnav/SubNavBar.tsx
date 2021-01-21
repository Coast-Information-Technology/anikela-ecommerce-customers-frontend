import React from "react";
import { Link } from "react-router-dom";

const categories: string[] = [
  "New in",
  "Clothing",
  "shoes",
  "accesories",
  "gifts",
  "activewear",
  "cosmetics",
  "brands",
  "collections",
];

const MenuTab: React.FC<{ title: string }> = (props) => {
  return (
    <li className="category hasMenu">
      <Link className="category__link" to="#">
        {props.title}
      </Link>
      <div className="category__menu">
        <div className="category__menu-content"></div>
      </div>
    </li>
  );
};
export const SubNavBar: React.FC = () => {
  return (
    <nav className="subcategory-nav">
      <ul className="subcategory-nav__container">
        {categories.map((category) => {
          return <MenuTab title={category} />;
        })}
      </ul>
    </nav>
  );
};

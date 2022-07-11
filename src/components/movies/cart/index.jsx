import React from "react";
import "./styles.scss";

const Cart = ({ logo, image, title, year, description }) => {
  return (
    <div className="cart">
      <div className="cart__image">
        <img className="cart__image__img" src={image} alt="" />
      </div>
      <div className="cart__info">
        <div className="cart__info__title">{title}</div>
        <div  className="cart__info__year">
          <img className="cart__info__year__l" src={logo} />
          <div className="cart__info__year__y">{year}</div>
        </div>

        <div className="cart__info__description"> {description} </div>
      </div>
    </div>
  );
};

export default Cart;

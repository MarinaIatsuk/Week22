
import React from 'react';

const Card = ({name, universe, alterego, friends, superpowers, rating, url}) => { //Передали пропсы сюда, без создания их в переменной (обязательно в {})

  return (
    <div>
      <div className="container__wrapper">
        <h1 className="container__title">{name}</h1>
        <img src={url} alt="poster" className="container__poster"/>
        <div className="container__subscribe">{universe}</div>
        <div className="container__subscribe">{alterego}</div>
        <div className="container__subscribe">{friends}</div>
        <div className="container__subscribe">{superpowers}</div>
        <div className="star">
          <div className="star__item" data-value="1"><i className="fa fa-star" aria-hidden="true"></i></div>
          <div className="star__item" data-value="2"><i className="fa fa-star" aria-hidden="true"></i></div>
          <div className="star__item" data-value="3"><i className="fa fa-star" aria-hidden="true"></i></div>
          <div className="star__item" data-value="4"><i className="fa fa-star" aria-hidden="true"></i></div>
          <div className="star__item" data-value="5"><i className="fa fa-star" aria-hidden="true"></i></div>
        </div>
        <div className="container__rating">Мой рейтинг: <span className="rating-value">{rating}</span></div>
      </div>
    </div>
  );
};

export default Card;


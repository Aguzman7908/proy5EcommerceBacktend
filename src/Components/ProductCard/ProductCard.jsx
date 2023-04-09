import React from 'react';

const ProductCard = (props) => {
  const { description, image, sku } = props;

  return (
    <div className="card">
      <div className="card__container">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="card__title-container">
          {title && <p className="title">{sku}</p>}
        </div>
      </div>

      <div className="content pl-2 pr-2">
        <p>{description}</p>
      </div>

      <div className="card__action-bar u-center">
        <button className="btn-transparent outline">Agregar</button>
      </div>
    </div>
  );
};

export default ProductCard;

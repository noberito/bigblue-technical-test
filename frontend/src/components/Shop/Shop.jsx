import * as React from "react";
import "./index.css";

const Shop = (props) => {

  const ItemCard = (product) => {
    return(
      <div className="col-md-4 mt-4" key={product.id}>
        <div className="card">
          <div className="card-img-container">
            <img
              className="card-img-top h-100 w-100"
              src={product.image_url}
              alt={product.name}
            />
          </div>
          <div className="card-body">
            <span className="card-title">
              <div className="d-flex justify-content-between">
                <span className="bigblue_bold_font">{product.name}</span>
                <span>{product.price}$</span>
              </div>
            </span>
            <span className="card-title">
              <div className="d-flex justify-content-between">
                <span className="bigblue_font">Remaining stock : {props.availableProducts[product.id]}</span>
              </div>
            </span>
            <div className="d-flex flex-column align-items-end mt-2">
            <button
              onClick={props.availableProducts[product.id] > 0 ? (() => props.onAddToCart(product.id)) : (() => {})}
              className="btn btn-primary bigblue_font"
            >
              Add to cart
            </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card m-4 w-50 pb-4">
      <h1 className="card-header bigblue_bold_font">Shop</h1>
      <div className="d-flex justify-content-between flex-wrap">
        {props.products.map((product) => (ItemCard(product)))}
      </div>
    </div>
  );
};

export { Shop };

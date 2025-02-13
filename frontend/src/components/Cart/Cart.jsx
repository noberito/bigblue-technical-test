import * as React from "react";

const Cart = (props) => {

  const LineShoppingCart = (product) => {
    return (
      <tr key={product.id} className="bigblue_font">
        <td className="align-middle text-center">
          <img
              className="img-fluid rounded"
              src={product.image_url}
              alt={product.name}
              style={{ width: "30%"}}
            />
        </td>
        <td className="align-middle text-start">{product.name}</td>
        <td className="align-middle">{product.price}$</td>
        <td className="align-middle text-center">{props.inCartProducts[product.id]}</td>
        <td className="align-middle text-center">
          {product.price * props.inCartProducts[product.id]}$
        </td>
        <td className="align-middle text-end">
          <button onClick={() => props.onRemoveFromCart(product.id)} className="btn btn-danger btn-sm">
            -
          </button>
        </td>
      </tr>
    );
  };

  const TotalPrice = () => {
    return props.products.reduce((totalPrice, product) => product.price * props.inCartProducts[product.id] + totalPrice, 0) 
  };

  return (
    <div className="card w-50 m-4 pb-4">
      <h1 className="card-header bigblue_bold_font">Shopping Cart</h1>
      <table className="table">
        <thead>
          <tr className="bigblue_font">
            <th></th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => 
            (props.inCartProducts[product.id] <= 0)
            ? null
            : LineShoppingCart(product)
          )}
        </tbody>
      </table>
      <span className="mx-auto bigblue_font">Total: {TotalPrice()}$</span>
    </div>
  );
};


export { Cart };

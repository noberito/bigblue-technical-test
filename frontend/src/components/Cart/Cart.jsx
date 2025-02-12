import * as React from "react";

const Cart = (props) => {
  return (
    <div className="card w-50 m-4 pb-4">
      <h1 className="card-header">Shopping Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => 
            EstIndisponible(product, props.inCartProducts) 
              ? null
              : LineShoppingCart(product, props.inCartProducts, props.onRemoveFromCart))}
        </tbody>
      </table>
      <span className="mx-auto">Total: {TotalPrice(props.products, props.inCartProducts)}$</span>
    </div>
  );
};

const LineShoppingCart = (product, inCartProducts, onRemoveFromCart) => {
  return (
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{inCartProducts[product.id]}</td>
      <td>{product.price}$</td>
      <div className="d-flex flex-column align-items-end mt-2">
          {RemoveButton(product, onRemoveFromCart)}
        </div>
  </tr>
  )
}

const RemoveButton = (product, onRemoveFromCart) => {
  return (
  
    <button
      onClick={() => onRemoveFromCart(product.id)}
      className="btn btn-primary"
    >
      Remove from cart
    </button>
  
  )
}

const EstIndisponible = (product, inCartProducts) => {
  return (inCartProducts[product.id] <= 0)
}

const TotalPrice = (products, inCartProducts) => {
  return products.reduce((totalPrice, product) => product.price * inCartProducts[product.id] + totalPrice, 0) 
};

export { Cart };

const Product = ({ product }) => {
  const { id, manufacturer, availability, name, price, type, color } = product;
  return (
    <div className="card d-inline-block m-3 w-25">
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{manufacturer}</h6>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {price}</li>
          <li className="list-group-item">Availability: {availability}</li>
          <li className="list-group-item">Colors: {color.join(", ")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;

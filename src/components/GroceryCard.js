const GroceryCard = (props) => {
  const { brand, name, price, delivery, img } = props.grocery;
  return (
    <div className="card">
      <img src={img} alt="card-img" className="w-[100%]" />
      <h4 className="font-bold text-lg my-1">{brand}</h4>
      <p className="font-semibold text-md">{name}</p>
      <p>Price: 1Kg - {price} Rs</p>
      <p>Delivery: {delivery}</p>
    </div>
  );
};

export default GroceryCard;

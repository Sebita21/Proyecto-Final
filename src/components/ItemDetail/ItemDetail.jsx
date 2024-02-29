import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../Ruting/Context/CartContext";

const ItemDetail = ({ item }) => {
  const { title, price, description, image } = item;
  const { addItem } = useCartContext();

  const onAdd = (count) => {
    addItem(item, count);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img
                  src={image}
                  className="img-fluid rounded-start no-expand"
                  alt={title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-center text-md-start">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text text-center text-md-start">
                    {description}
                  </p>
                  <p className="card-text">
                    <span className="price-highlight h2">${price}</span>
                  </p>
                  <div className="mt-2">
                    <ItemCount onAdd={onAdd} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

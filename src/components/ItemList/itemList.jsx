import Item from "../Item/Item";
import PropTypes from "prop-types";

const itemList = ({ itemList }) => {
  return (
    <div className="row">
      {itemList.map(({ id, image, price, title, category }) => {
        return (
          <Item
            key={id}
            id={id}
            imagen={image}
            precio={price}
            titulo={title}
            categoria={category}
          />
        );
      })}
    </div>
  );
};

itemList.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      pirce: PropTypes.number,
      category: PropTypes.string,
    })
  ),
};
export default itemList;

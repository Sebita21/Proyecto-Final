import { useState, useEffect } from "react";
import ItemList from "../ItemList/itemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../../FireBase/Config";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    if (categoryId) {
      const queryCollection = query(
        productsCollection,
        where("category", "==", categoryId)
      );
      getDocs(queryCollection).then(({ docs }) => {
        const products = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(products);
      });
      setLoading(false);
    } else {
      getDocs(productsCollection).then(({ docs }) => {
        const products = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(products);
      });
      setLoading(false);
    }
  }, [categoryId]);

  return loading ? <Spinner /> : <ItemList itemList={items} />;
};
ItemListContainer.propTypes = {};

export default ItemListContainer;

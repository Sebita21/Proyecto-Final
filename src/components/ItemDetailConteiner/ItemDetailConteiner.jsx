import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { db } from "../../FireBase/Config";
import { collection, getDocs, getDoc } from "firebase/firestore";

const ItemDetailConteiner = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      const productsCollection = collection(db, "products");

      try {
        const querySnapshot = await getDocs(productsCollection);

        const productDoc = querySnapshot.docs.find(
          (doc) => doc.id === productId
        );

        if (productDoc) {
          const productSnapshot = await getDoc(productDoc.ref);

          if (productSnapshot.exists()) {
            setItem({ ...productSnapshot.data() });
            setLoading(false);
          } else {
            console.log(`El producto con ID ${productId} no existe.`);
          }
        } else {
          console.log(`No se encontró ningún producto con ID ${productId}.`);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  if (loading) return <Spinner />;

  return <ItemDetail item={item} />;
};

export default ItemDetailConteiner;

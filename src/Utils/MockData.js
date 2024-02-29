
export const getProductsAsync = () =>{
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

export const getProductsAsyncById = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
};
export const getCategoriAsync = () =>{
  return fetch('https://fakestoreapi.com/products/categories').then((res)=>res.json());
}
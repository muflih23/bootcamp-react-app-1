import { useEffect, useState } from "react";
import { getProducts } from "../../service/products";

function useProducts() {
  const [productList, setProductList] = useState([]);

  const handleGetProduct = async () => {
    try {
      const response = await getProducts();
      if(response.products) {
        setProductList(response.products)
      }
    } catch (error) {
      console.log("terjadi masalah pada pengambilan data produk :", error)
    }
  };

  useEffect(() => {
    handleGetProduct()
  }, [])

  return {
    productList,
  }
}

export default useProducts;

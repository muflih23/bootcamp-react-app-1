import { useEffect, useState } from "react";
import { getProducts } from "../../service/products";

function useProducts() {
  const [productList, setProductList] = useState([]);

  const [searchParam, setSearchParam] = useState({
    limit: 10,
    skip: 0, //ini akan berubah seiring dengan kita mengakses halaman
    q: "",
  })

  const [paginationInfo, setPaginationInfo] = useState({
    currentPage: 1,
    totalPage: 0,
    totalItems: 0,
  })

  const handlePageChange = (page) => {
    setSearchParam({
      ...searchParam,
      skip: (page * 10) - 10,
    })
    setPaginationInfo({
      ...paginationInfo,
      currentPage: page,
    })
  }

  const handleGetProduct = async () => {
    try {
      const response = await getProducts(searchParam);
      if(response.products) {
        setProductList(response.products)
        setPaginationInfo({
          currentPage: (response.skip / response.limit) + 1,
          totalPage: response.total % searchParam.limit != 0 ? Math.floor((response.total / searchParam.limit) + 1) : response.total / searchParam.limit,
          totalItems: response.total
        })
      }
    } catch (error) {
      console.log("terjadi masalah pada pengambilan data produk :", error)
    }
  };

  useEffect(() => {
    handleGetProduct()
  }, [searchParam])

  return {
    productList,
    paginationInfo,
    handlePageChange,
  }
}

export default useProducts;

import React from 'react'
import style from './home.module.css'
import useProducts from '../../hooks/products/useProducts';
import ProductCard from '../../components/molecule/product-card/productCard';
import Pagination from 'components/molecule/pagination/Pagination';

function Home() {

  const userData = JSON.parse(localStorage.getItem("userData"));

  const {
    productList,
    paginationInfo,
    handlePageChange
  } = useProducts();

  return (
    <div className={style.content}>
      <div className={style.headContent}>
        <h1>Halo, {`${userData.firstName} ${userData.lastName}`}</h1>
        <span>Staff Cashier</span>
        <div className={style.searchWrapper}>
          <input placeholder='Input keyword...' className={style.searchField} />
          <button className={style.searchBtn}>Search</button>
        </div>
      </div>
      <div className={style.productList}>
        {
          productList.map((product) => (
            <ProductCard 
              image={product.thumbnail}
              productName={product.title}
              productPrice={product.price}
            />
          ))
        }
      </div>
      <div className={style.paginationWrapper}>
        <Pagination 
          totalPages={paginationInfo.totalPage}
          currentPage={paginationInfo.currentPage}
          onPageChange={(page) => {handlePageChange(page)}}
          visiblePages={5}
        />
      </div>
    </div>
  )
}

export default Home
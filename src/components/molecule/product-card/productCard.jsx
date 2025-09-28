import React from 'react'
import style from './productCard.module.css'

function ProductCard({
  image,
  productName,
  productPrice,
  qty,
}) {
  return (
    <div className={style.cardContainer}>
      <div className={style.productInfo}>
        <div className={style.productImg}>
          <img src={image}/>
        </div>
        <div className={style.info}>
          <h5 className={style.productName}>{productName}</h5>
          <h5 className={style.productPrice}>${productPrice}</h5>
        </div>
      </div>
      <div className={style.qtyWrapper}></div>
    </div>
  )
}

export default ProductCard
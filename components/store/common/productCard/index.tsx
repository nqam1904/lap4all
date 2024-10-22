import styles from "./productCard.module.scss";

import Image from "next/image";
import Link from "next/link";

import { TProductCard } from "@/types/common";
import React from "react";

const ProductCard = ({
  name,
  imgUrl,
  price,
  dealPrice = undefined,
  specs,
  url,
  isAvailable = true,
  staticWidth = false,
}: TProductCard) => {
  return (
    <Link
      href={url}
      className={`${styles.productCard} ${staticWidth && styles.staticWidth} `}
    >
      {!isAvailable && (
        <div className={styles.outOfStock}>
          <span>Hết hàng</span>
        </div>
      )}
      <div className={styles.imageWrapper}>
        <Image src={imgUrl[0]} alt={name} fill sizes="(max-width: 240px)" />
        <Image src={imgUrl[1]} alt={name} fill sizes="(max-width: 240px)" />
      </div>
      <span className={styles.title}>{name}</span>
      <div className={styles.specWrapper}>
        {specs.map((spec, index) => (
          <span key={index}>{spec}</span>
        ))}
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.priceWrapper}>
          {dealPrice ? (
            <React.Fragment>
              <div className={styles.oldPrice}>
                <span>
                  -
                  {(100 - (dealPrice / price) * 100).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                  %
                </span>
                <span>
                  giá gốc{" "}
                  {price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
              <span className={styles.mainPrice}>
                {dealPrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </React.Fragment>
          ) : (
            <span className={styles.mainPrice}>
              {price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          )}
        </div>
        <div className={styles.basketWrapper}>
          <button className={styles.addFavorite} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

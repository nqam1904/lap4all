"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import styles from "./vertical.module.scss";

export default function VerticalCard({
  bgColor,
  brand,
  name,
  price,
  sale_price,
  image,
  border,
  href,
}: any) {
  return (
    <Link href={href || "#"}>
      <div
        className={styles.verticalCard}
        style={{
          backgroundColor: bgColor || "",
          border: border && "2px solid #eee",
        }}
      >
        {sale_price && price && (
          <button className={styles.favContainer}>
            {(((price - sale_price) / price) * 100) | 0}%
          </button>
        )}
        <div className={styles.imageContainer}>
          {image && (
            <Image
              fill={true}
              className={styles.image}
              src={image}
              loading="lazy"
              alt=""
            />
          )}
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.brandText}>{brand}</h4>
          <h4>{name}</h4>
          {sale_price ? (
            <div className={styles.priceContainer}>
              <div className={styles.prices}>
                <span className={styles.priceText}>{price}$</span>
                <span className={styles.salePriceText}>{sale_price}$</span>
              </div>
            </div>
          ) : (
            <span className={styles.salePriceText}>{price || 0}$</span>
          )}
        </div>
      </div>
    </Link>
  );
}

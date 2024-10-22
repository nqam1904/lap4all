"use client";
import styles from "./productBoard.module.scss";

import Link from "next/link";
import { useState } from "react";

import { TProductBoard } from "@/types/product";

import { HeartIcon, StarIcon } from "@/components/icons/svgIcons";
import { TCartItem } from "@/types/shoppingCart";
import Quantity from "../../common/quantity";
import AddToCartButton from "../addToCartButton";

const ProductBoard = ({ boardData }: { boardData: TProductBoard }) => {
  const {
    name,
    id,
    isAvailable,
    specialFeatures,
    price,
    shortDesc,
    dealPrice,
    defaultQuantity,
  } = boardData;
  const [quantity, setQuantity] = useState(
    defaultQuantity > 1 ? defaultQuantity : 1,
  );

  const handleQuantityChange = (isReducing: boolean) => {
    isReducing
      ? quantity === 1
        ? quantity
        : setQuantity(quantity - 1)
      : setQuantity(quantity + 1);
  };

  const cartItemData: TCartItem = {
    productId: id,
    quantity: quantity,
  };
  return (
    <div className={styles.productBoard}>
      <button className={styles.favorite}>
        <HeartIcon width={22} />
      </button>
      <section>
        <div className={styles.stars}>
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <Link href={"#"}>880 Đánh giá của người dùng</Link>
        </div>
      </section>
      <h1>{name}</h1>
      <span className={styles.shortDesc}>{shortDesc}</span>
      <hr />
      <div className={styles.specialFeatures}>
        {specialFeatures &&
          specialFeatures?.map((feature, index) => (
            <span key={index}>{feature}</span>
          ))}
      </div>
      <h2 className={styles.price}>
        {(dealPrice ? dealPrice : price).toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        })}
      </h2>

      {dealPrice && (
        <div className={styles.dealPrice}>
          <span className={styles.dealAmount}>
            {`
            Tiết kiệm
            ${(price - dealPrice).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
            `}
          </span>
          <span className={styles.oldPrice}>
            Giá gốc:{" "}
            {price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
      )}
      <hr />

      {/* ----------------- ADD TO CART SECTION ----------------- */}
      {/* <section className={styles.addToCartSection}>
        <Quantity onChange={handleQuantityChange} quantity={quantity} />
        <AddToCartButton cartItemData={cartItemData} disabled={!isAvailable} />
      </section> */}
    </div>
  );
};

export default ProductBoard;

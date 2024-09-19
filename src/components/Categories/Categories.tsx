import { ItemCategories } from "@/types";
import Link from "next/link";
import React from "react";
import styles from "./categories.module.scss";

const CategoryItem: React.FC<ItemCategories> = ({ name, link, emoji }) => {
  return (
    <li className={styles.categoryItem}>
      <Link href={link || "/"}>
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.categoryName}>{name}</span>
      </Link>
    </li>
  );
};

function Categories() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Khám phá</h2>
      <ul className={styles.categories}>
        <CategoryItem name="Trang chủ" emoji="⚡" link="/" />
        <CategoryItem name="Sản phẩm" emoji="👚" link="/category/clothing" />
        <CategoryItem name="Nổi bật" emoji="👠" link="/category/shoes" />
        <CategoryItem name="Phụ kiện" emoji="👜" link="/category/accessories" />
        <CategoryItem
          name="Quà tặng & khuyến mãi"
          emoji="🎁"
          link="/category/gifts_and_living"
        />
      </ul>
    </div>
  );
}

export default Categories;

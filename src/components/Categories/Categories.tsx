import { categoriesData } from "@/constants/dummy";
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

const renderItem = () => {
  return categoriesData.map((i, index) => (
    <CategoryItem
      key={index + i.id}
      name={i.title}
      emoji={i.icon}
      link={i.link}
    />
  ));
};

function Categories() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Khám phá</h2>
      <ul className={styles.categories}>{renderItem()}</ul>
    </div>
  );
}

export default Categories;

"use client";

import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.scss";

function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <Header className={styles.container}>
      {/* LOGO */}
      <div className={styles.logoContainer}>
        <Link href="/">
          <p className={styles.logo}>Laptop</p>
        </Link>
      </div>
      {/* INPUT SEARCH */}
      <div className={styles.inputContainer}>
        <Input
          size="large"
          className={styles.inputAnt}
          placeholder="Tìm kiếm sản phẩm, thương hiệu, nhiều hơn..."
          prefix={
            <SearchOutlined style={{ fontSize: "24px", marginRight: "10px" }} />
          }
          allowClear
          value={search}
          variant="borderless"
          onChange={(value) => setSearch(value.target.value)}
        />
      </div>
      {/* RIGHT CONTAINER */}
      <div className={styles.rightConrtainer}>
        <Link href="/">
          <div className={styles.cartContainer}>
            <ShoppingCartOutlined
              className={styles.cartIcon}
              style={{ fontSize: "24px" }}
            />
            <span>Cart: {0}</span>
          </div>
        </Link>
      </div>
    </Header>
  );
}

export default Navbar;

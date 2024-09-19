"use client";

import { AlignLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./page.module.scss";

export default function Home() {
  const HeaderPage = () => {
    return (
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.emoji}>⚡</span>Trang chủ
        </h1>
        <div className={styles.headerButtons}>
          <Button
            icon={<AlignLeftOutlined />}
            size="large"
            className={styles.buttons}
            onClick={() => console.log("click")}
          >
            Sort
          </Button>
        </div>
      </div>
    );
  };
  return (
    <main className={styles.main}>
      <HeaderPage />
    </main>
  );
}

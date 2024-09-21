/* eslint-disable jsx-a11y/alt-text */
"use client";
import { IBanner } from "@/types";
import { Image } from "antd";
import React from "react";
import styles from "./banner.module.scss";

const Banner: React.FC<IBanner> = ({ url, alt }) => {
  return (
    <div className={styles.container}>
      <Image src={url} alt={alt} preview={false} />
    </div>
  );
};
export default React.memo(Banner);

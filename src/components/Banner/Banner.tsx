/* eslint-disable jsx-a11y/alt-text */
"use client";

import { IBanner } from "@/types";
import { Image } from "antd";
import styles from "./banner.module.scss";

const Banner: React.FC<IBanner> = ({ url, alt }) => {
  return (
    <div className={styles.container}>
      <Image
        src={url}
        alt={alt}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};
export default Banner;

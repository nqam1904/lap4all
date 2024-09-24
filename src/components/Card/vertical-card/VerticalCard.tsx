"use client";
import { IVerticalCard } from "@/types";
import { formatPrice } from "@/utils";
import { Card, Image } from "antd";
import React from "react";
import styles from "./vertical.module.scss";

const VerticalCard: React.FC<IVerticalCard> = ({
  loading,
  name,
  thumbnail,
  price,
  alt,
  preview = false,
  bordered = false,
  hoverable = false,
}) => {
  return (
    <Card
      className={styles.container}
      loading={loading}
      bordered={bordered}
      hoverable={hoverable}
      cover={
        !loading ? (
          <div className={styles.wrapper_image}>
            <Image
              alt={alt}
              src={thumbnail}
              className={styles.image_item}
              preview={preview}
            />
          </div>
        ) : (
          <></>
        )
      }
    >
      <Card.Meta
        title={name}
        description={
          <div className={styles.description}>
            <p className={styles.price}>{formatPrice(String(price || "0"))}</p>
          </div>
        }
      />
    </Card>
  );
};

export default React.memo(VerticalCard);

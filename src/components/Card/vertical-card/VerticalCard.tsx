"use client";
import { IVerticalCard } from "@/types";
import { Card, Image } from "antd";
import React from "react";

const VerticalCard: React.FC<IVerticalCard> = ({
  loading,
  name,
  thumbnail,
  shortDescription,
  alt,
}) => {
  return (
    <Card
      loading={loading}
      bordered
      cover={
        <Image
          alt={alt || ""}
          src={thumbnail}
          width={300}
          // fallback="https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"
        />
      }
    >
      <Card.Meta
        title={name || ""}
        description={
          <>
            <p>{shortDescription}</p>
          </>
        }
      />
    </Card>
  );
};

export default React.memo(VerticalCard);

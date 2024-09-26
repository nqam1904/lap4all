"use client";
import { getNameCategory } from "@/utils";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb as BCurmb } from "antd";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const [itemBreadcrumb, setItemBreadcrumb] = useState<any[]>([]);

  const parseUrl = () => {
    const parts = pathname.split("/");
    if (parts.length >= 3) {
      const name = parts[2];
      return [
        { title: "Danh mục" },
        { title: `${getNameCategory(name)}`, href: `/${name}` },
      ];
    }
    return [];
  };

  useEffect(() => {
    const data = parseUrl();
    setItemBreadcrumb(data);
  }, []);

  return (
    <BCurmb
      style={{ marginTop: 20, marginBottom: 20 }}
      items={[
        {
          title: <HomeOutlined />,
          href: "/",
        },
        ...itemBreadcrumb,
      ]}
    />
  );
};

export default Breadcrumb;

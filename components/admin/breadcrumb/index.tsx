import { dashboardSideMenu } from "@/data/dummyData";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";

type TBreadcrumbAdmin = {
  pathname: string;
};
const BreadCrumbAdmin: React.FC<TBreadcrumbAdmin> = ({ pathname }) => {
  const itemBreadCrumb = dashboardSideMenu.find((x) => x.link === pathname);
  return (
    <Breadcrumb
      items={[
        {
          href: "/admin",
          title: (
            <>
              <HomeOutlined />
              <span>Trang chủ</span>
            </>
          ),
        },
        itemBreadCrumb,
      ]}
    />
  );
};

export default BreadCrumbAdmin;

"use client";

import { dashboardSideMenu } from "@/data/dummyData";
import { usePathname } from "next/navigation";
import React from "react";
import BreadCrumbAdmin from "../breadcrumb";
import styles from "./header-page.module.scss";

const HeaderPage: React.FC = () => {
  const pathname = usePathname();
  const title = dashboardSideMenu.find((x) => x.link === pathname).title || "";
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
          <BreadCrumbAdmin pathname={pathname} />
    </div>
  );
};

export default HeaderPage;

"use client";

import {
  TGetAllCategories,
  getAllCategories,
} from "@/actions/category/category";
import AddCategoryGroup from "@/components/admin/category/addCategoryGroup";
import CatGroupRow from "@/components/admin/category/rowGroup";
import HeaderPage from "@/components/admin/header-page";
import { Collapse, Skeleton } from "antd";
import { useEffect, useState } from "react";
import styles from "./adminCategories.module.scss";

type ExpandIconPosition = "start" | "end";

const AdminCategories = () => {
  const [allCategories, setAllCategories] = useState<TGetAllCategories[]>([]);
  const [expandIconPosition, setExpandIconPosition] =
    useState<ExpandIconPosition>("start");

  const getData = async () => {
    const data = await getAllCategories();
    if (data.res) setAllCategories(data.res);
  };

  useEffect(() => {
    getData();
  }, []);

  const groups: TGetAllCategories[] = [];
  const categories: TGetAllCategories[] = [];

  if (allCategories.length > 0) {
    allCategories.forEach((cat) => {
      cat.parentID === null ? groups.push(cat) : categories.push(cat);
    });
  }

  // HANDLE COLLAPSE
  const items: any = groups.map((group) => ({
    key: group.id,
    label: group.name,
    children: (
      <CatGroupRow onReset={getData} data={group} categories={categories} />
    ),
  }));

  const onChange = () => {};

  const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  return (
    <div className={styles.categoryList}>
      <HeaderPage />
      <div className={styles.head}>
        <AddCategoryGroup onReset={getData} />
      </div>

      {groups.length ? (
        <Collapse
          className={styles.collapes_container}
          defaultActiveKey={["1"]}
          onChange={onChange}
          expandIconPosition={expandIconPosition}
          items={items}
          size="large"
        />
      ) : (
        <Skeleton style={{ marginTop: 24 }} />
      )}
      {/* <div className={styles.dataTable}>
        {groups.length > 0 &&
          groups.map((group) => (
            <div className={styles.catLevel1} key={group.id}>
              <CatGroupRow
                onReset={getData}
                data={group}
                categories={categories}
              />
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default AdminCategories;

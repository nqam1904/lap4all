"use client";

import { Breadcrumb, HeaderPage, VerticalCard } from "@/components";
import { productData } from "@/constants/dummy";
import { getEmoji, getNameCategory } from "@/utils";
import { fakeApiCall } from "@/utils/Utils";
import { useEffect, useMemo, useState } from "react";
import styles from "./caterories.module.scss";

interface ICategoryDetails {
  params: { categoryName: string };
}

const CategoryDetails: React.FC<ICategoryDetails> = ({
  params,
}: ICategoryDetails) => {
  const { categoryName } = params;

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response: any = await fakeApiCall(productData);
      setData(response);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  const renderItem = useMemo(() => {
    return data.map((product, index) => (
      <VerticalCard
        key={index}
        loading={loading}
        {...product}
        hoverable={true}
      />
    ));
  }, [loading, data]);

  useEffect(() => {
    fetchData();
  }, []);

  const renderItemLoading = () => {
    return (
      <div className={styles.products}>
        {new Array(4).fill(null).map((x, index) => (
          <VerticalCard key={index} loading={loading} />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <HeaderPage
        title={getNameCategory(categoryName)}
        icon={getEmoji(categoryName)}
        name={categoryName}
      />
      <Breadcrumb />
      {!!renderItem.length ? (
        <div className={styles.products}>{renderItem}</div>
      ) : (
        renderItemLoading()
      )}
    </div>
  );
};

export default CategoryDetails;

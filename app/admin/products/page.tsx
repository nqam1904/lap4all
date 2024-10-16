"use client";
import styles from "./adminProducts.module.scss";

import { getAllProducts } from "@/actions/product/product";
import Popup from "@/components/UI/popup";
import HeaderPage from "@/components/admin/header-page";
import ProductForm from "@/components/admin/product/productForm";
import { TAddProductFormValues, TProductListItem } from "@/types/product";
import { isEmptyObject } from "@/utils/utils";
import { Button, message, Table, TableProps } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";

const initialForm: TAddProductFormValues = {
  name: "",
  brandID: "",
  specialFeatures: [],
  isAvailable: false,
  desc: "",
  price: "",
  salePrice: "",
  images: [],
  categoryID: "",
  specifications: [],
};
type DataType = {
  key: number;
  name: string;
  age: number;
  address: string;
  description: string;
};
const AdminProducts = () => {
  const [showProductWindow, setShowProductWindow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] =
    useState<TAddProductFormValues>(initialForm);
  const [productsList, setProductsList] = useState<TProductListItem[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  const tableProps: TableProps<TProductListItem> = {
    bordered: true,
    loading: isLoading,
    size: "large",
    // expandable,
    // title: showTitle ? defaultTitle : undefined,
    showHeader: true,
    // footer: showFooter ? defaultFooter : undefined,
    // rowSelection,
    // scroll,
    // tableLayout,
  };

  const tableColumns: ColumnsType<TProductListItem> = [
    {
      key: "name",
      title: "Tên",
      dataIndex: "name",
    },
    {
      key: "price",
      title: "Giá tiền",
      dataIndex: "price",
    },
    {
      key: "isAvailable",
      title: "Tình trạng",
      dataIndex: "isAvailable",
    },
  ];

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    const response = await getAllProducts();
    if (response.res) setProductsList(response.res);
  };

  const handleAddProduct = async () => {
    console.log(formValues);
    setIsLoading(true);
    try {
      if (isEmptyObject(formValues)) {
        console.log("hello", isEmptyObject(formValues));
        messageApi.error({
          type: "error",
          content: "Dữ liệu không hợp lệ, vui lòng kiểm tra lại!",
        });
      }
      return;
      // const result = await addProduct(formValues);
      // if (result.error) {
      //   setIsLoading(false);
      // }
      // if (result.res) {
      //   setIsLoading(false);
      //   setShowProductWindow(false);
      // }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: `${error}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.adminProducts}>
      {contextHolder}
      <HeaderPage />
      <div className={styles.header}>
        <Button type="primary" onClick={() => setShowProductWindow(true)}>
          Thêm sản phẩm
        </Button>
      </div>

      <Table {...tableProps} columns={tableColumns} dataSource={productsList} />

      {showProductWindow && (
        <Popup
          content={
            <ProductForm formValues={formValues} onChange={setFormValues} />
          }
          isLoading={isLoading}
          onCancel={() => setShowProductWindow(false)}
          onClose={() => setShowProductWindow(false)}
          onSubmit={() => handleAddProduct()}
          confirmBtnText="Thêm"
          title="Thêm sản phẩm mới"
        />
      )}
    </div>
  );
};

export default AdminProducts;

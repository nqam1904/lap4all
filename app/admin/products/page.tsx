"use client";
import { deleteProduct, getAllProducts } from "@/actions/product/product";
import HeaderPageAdmin from "@/components/admin/header-page";
import {
  expandedRowRender,
  tableColumns,
  tableProps,
} from "@/components/admin/product/columns/columns";
import { useStyle } from "@/hooks/useStyles";
import { TProductListItem } from "@/types/product";
import { EditOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm, Space, Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./adminProducts.module.scss";

const AdminProducts = () => {
  // HOOKS
  const router = useRouter();
  const { styles: styleTable } = useStyle();
  const [messageApi, contextHolder] = message.useMessage();
  // STATE
  const [isLoading, setIsLoading] = useState(true);
  const [productsList, setProductsList] = useState<TProductListItem[]>([]);

  const columnsAction: ColumnsType<TProductListItem> = [
    {
      key: "action",
      title: "Chức năng",
      align: "center",
      width: 250,
      render: (_, record) => {
        return (
          <Space size="middle">
            <Tooltip title="Chỉnh sửa nhanh">
              <Button type="default" shape="circle" icon={<EditOutlined />} />
            </Tooltip>

            <Button color="primary" variant="outlined" onClick={() => {}}>
              Cập nhật
            </Button>

            <Popconfirm
              title="Xóa sản phẩm?"
              description="Bạn có chắc muốn xóa không?"
              onConfirm={() => handleDelete(record)}
              okText="Đồng ý"
              cancelText="Hủy"
            >
              <Button danger>Xóa</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  // ---------------------- HANDLE LOGIC ----------------------
  const getProductsList = async () => {
    try {
      const response = await getAllProducts();
      if (response.res) setProductsList(response.res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (data: TProductListItem) => {
    const response = await deleteProduct(data.id);
    if (response.error) {
      messageApi.open({
        type: "success",
        content: `Đã có lỗi xảy ra!`,
      });
      setIsLoading(false);
    }
    if (response.res) {
      messageApi.open({
        type: "success",
        content: `Xóa thành công!`,
      });
      setIsLoading(false);
      getProductsList();
    }
  };

  const addProduct = () => router.push("/admin/products/addProduct");

  // ---------------------- GET DATA ----------------------
  useEffect(() => {
    getProductsList();
  }, []);

  const mergeColumns = [...tableColumns, ...columnsAction];

  return (
    <div className={styles.adminProducts}>
      {contextHolder}
      <HeaderPageAdmin textCta="Thêm sản phẩm" onClick={addProduct} isShowButton />
      <Table
        {...tableProps}
        loading={isLoading}
        rowKey={(record) => record?.id}
        expandable={{
          expandedRowRender: (record: TProductListItem) =>
            expandedRowRender(record),
        }}
        columns={mergeColumns}
        className={styleTable.customTable}
        dataSource={productsList}
        pagination={{ pageSize: 10 }}
        scroll={{ y: 55 * 5 }}
      />
    </div>
  );
};

export default AdminProducts;

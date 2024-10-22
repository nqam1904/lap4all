import { TProductListItem } from "@/types/product";
import { Avatar, Tag } from "antd";
import Table, { ColumnsType, TableProps } from "antd/es/table";

// CONFIG TABLE
const tableProps: TableProps<TProductListItem> = {
  bordered: true,
  size: "large",
  showHeader: true,
};
// DATA TABLE SHOW
const tableColumns: ColumnsType<TProductListItem> = [
  {
    key: "id",
    title: "Mã sản phẩm",
    dataIndex: "id",
    align: "center",
    width: 150,
  },
  {
    key: "name",
    title: "Tên sản phẩm",
    dataIndex: "name",
    align: "center",
    width: 150,
  },
  {
    key: "images",
    title: "Hình ảnh",
    align: "center",
    width: 180,
    render: (_, record) => {
      const { images, name } = record;
      return (
        <Avatar.Group>
          {images.map((image, index) => (
            <Avatar key={index} src={image} alt={`product_${name}`} />
          ))}
        </Avatar.Group>
      );
    },
  },
  {
    key: "specialFeatures",
    title: "Mô tả",
    dataIndex: "specialFeatures",
    align: "center",
    ellipsis: true,
    width: 180,
  },

  {
    key: "price",
    title: "Giá tiền",
    align: "center",
    width: 150,
    sorter: (a, b) => parseFloat(b.price) - parseFloat(a.price),
    render: (_, record) => (
      <span>
        {parseInt(record.price).toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        })}
      </span>
    ),
  },
  {
    key: "isAvailable",
    title: "Tình trạng",
    align: "center",
    width: 80,
    filters: [
      { text: "Còn hàng", value: true },
      { text: "Hết hàng", value: false },
    ],
    onFilter: (value, record) => record.isAvailable === value,
    render: (_, record) => {
      const { isAvailable } = record;
      if (isAvailable) {
        return <Tag color="green">Còn hàng</Tag>;
      } else {
        return <Tag color="red">Hết hàng</Tag>;
      }
    },
  },
];

const expandedRowRender = (data: TProductListItem) => {
  const expandColumns: ColumnsType<TProductListItem> = [
    {
      key: "brand",
      title: "Thương hiệu",
      dataIndex: "brand",
      align: "center",
      width: 80,
      render: (_, record) => {
        const { brand } = record;
        return <div>{brand.name}</div>;
      },
    },
    {
      key: "category",
      title: "Danh mục",
      dataIndex: "brand",
      align: "center",
      width: 80,
      render: (_, record) => {
        const { category } = record;
        return <div>{category.name}</div>;
      },
    },
    {
      key: "salePrice",
      title: "sale",
      dataIndex: "salePrice",
      align: "center",
      width: 80,
      render: (_, record) => {
        const { salePrice } = record;
        return (
          <div>
            {parseInt(salePrice).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        );
      },
    },
    {
      key: "count",
      title: "Số lượng",
      dataIndex: "count",
      width: 80,
      align: "center",
    },
  ];
  return (
    <Table
      bordered
      rowKey={(record) => record?.id}
      columns={expandColumns}
      dataSource={[data]}
      pagination={false}
    />
  );
};

export { expandedRowRender, tableColumns, tableProps };

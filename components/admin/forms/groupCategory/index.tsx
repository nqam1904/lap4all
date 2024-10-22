"use client";
import { TGetAllCategories } from "@/actions/category/category";
import { Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
interface IProps {
  errorMsg: string;
  data: TGetAllCategories;
  onChange: (data: TGetAllCategories) => void;
}

const GroupCategory = ({ errorMsg, data, onChange }: IProps) => {
  const [form] = useForm();
  return (
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
      style={{ marginTop: 20 }}
    >
      <Form.Item
        name="name"
        label="Nhóm danh mục"
        rules={[
          {
            required: true,
            type: "string",
            message: "Vui lòng nhập tên sản phẩm!",
          },
        ]}
      >
        <Input
          allowClear
          placeholder="Nhập tên danh mục..."
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.currentTarget.value })}
        />
      </Form.Item>
      <Form.Item
        name="url"
        label="Nhóm danh mục"
        rules={[
          {
            required: true,
            type: "string",
            message: "Vui lòng nhập link danh mục!",
          },
        ]}
      >
        <Input
          onChange={(e) => onChange({ ...data, url: e.currentTarget.value })}
          placeholder="URL..."
          value={data.url}
        />
      </Form.Item>
      <Form.Item
        name="iconUrl"
        label="Nhóm danh mục"
        rules={[
          {
            required: true,
            type: "string",
            message: "Vui lòng nhập link icon!",
          },
        ]}
      >
        <Input
          allowClear
          placeholder="Nhập link icon danh mục..."
          value={data.iconUrl || ""}
          onChange={(e) =>
            onChange({ ...data, iconUrl: e.currentTarget.value })
          }
        />
      </Form.Item>
    </Form>
  );
};

export default GroupCategory;

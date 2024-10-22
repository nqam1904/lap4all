"use client";

import { getAllBrands } from "@/actions/brands/brands";
import { getAllCategoriesJSON } from "@/actions/category/category";
import { getCategorySpecs } from "@/actions/category/specifications";
import { addProduct } from "@/actions/product/product";
import TextEditor from "@/components/admin/text-editor/TextEditor";
import { TGroupJSON } from "@/types/categories";
import { TBrand } from "@/types/product";
import { TDropDown } from "@/types/uiElements";
import {
  HomeOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { ProductSpec, SpecGroup } from "@prisma/client";
import {
  Breadcrumb,
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Radio,
  Row,
  Select,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./addProduct.module.scss";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const optionsRadios = [
  { label: "Còn hàng", value: true },
  { label: "Hết hàng", value: false },
];

const AddProduct = () => {
  const [form] = useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const [categoryList, setCategoryList] = useState<TDropDown[]>([]);
  const [brandList, setBrandList] = useState<TDropDown[]>([]);
  const [loading, setLoading] = useState(false);
  const [categorySpecs, setCategorySpecs] = useState<SpecGroup[]>([]);
  const [specifications, setSpecifications] = useState<any[]>([]);

  const onFinish = async (e: any) => {
    setLoading(true);
    try {
      const payload = {
        ...e,
        price: String(e.price),
        count: String(e.count),
        salePrice: String(e.salePrice),
        specifications: specifications,
      };
      const result = await addProduct(payload);
      if (result.error) {
        messageApi.open({
          type: "error",
          content: `${result.error}`,
        });
      }
      if (result.res) {
        messageApi.open({
          type: "success",
          content: `Thành công!`,
        });
        setTimeout(() => {
          router.back();
        }, 2000);
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: `${error}`,
      });
    } finally {
      setLoading(false);
    }
  };

  // ---------------------- GET DATA ----------------------

  const handleCategoryChange = (index: number) => {
    if (index === 0) {
      setCategorySpecs([]);
    } else {
      const getSpecGrous: any = categoryList.filter(
        (x: any) => x.value === index,
      );
      getSpecGroup(getSpecGrous?.[0]?.value || 0);
    }
  };

  const getSpecGroup = async (categoryID: string) => {
    const response = await getCategorySpecs(categoryID);
    if (response.res) {
      const specArray: ProductSpec[] = [];
      response.res.forEach((item) => {
        specArray.push({
          specGroupID: item.id,
          specValues: item.specs.map(() => ""),
        });
      });
      const dataSpecs = response.res;
      setCategorySpecs(dataSpecs);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAllCategoriesJSON();
      if (result.res) {
        setCategoryList(convertJSONtoDropdownList(result.res));
      }
    };

    const fetchBrands = async () => {
      const result = await getAllBrands();
      if (result.res) {
        setBrandList(convertBrandsToDropdownList(result.res));
      }
    };

    const convertJSONtoDropdownList = (json: TGroupJSON[]): TDropDown[] => {
      const dropDownData: TDropDown[] = [];
      json.forEach((group) => {
        dropDownData.push({
          label: group.group.name,
          value: group.group.id,
        });
        group.categories.forEach((category) => {
          dropDownData.push({
            label: group.group.name + " - " + category.category.name,
            value: category.category.id,
          });
          category.subCategories.forEach((sub) => {
            dropDownData.push({
              label:
                group.group.name +
                " - " +
                category.category.name +
                " - " +
                sub.name,
              value: sub.id,
            });
          });
        });
      });

      return dropDownData;
    };

    const convertBrandsToDropdownList = (brandList: TBrand[]): TDropDown[] => {
      const dropDownData: TDropDown[] = [];
      brandList.forEach((brand) => {
        dropDownData.push({
          label: brand.name,
          value: brand.id,
        });
      });

      return dropDownData;
    };

    fetchCategories();
    fetchBrands();
  }, []);

  // ---------------------- HANDLE SPECS GROUP CHANGE VALUE ----------------------
  const handleInputChange = (groupId: any, specIndex: any, value: any) => {
    const updatedSpecs = [...specifications];

    const groupIndex = updatedSpecs.findIndex(
      (specGroup) => specGroup.specGroupID === groupId,
    );

    if (groupIndex !== -1) {
      updatedSpecs[groupIndex].specValues[specIndex] = value;
    } else {
      const newSpecGroup: any = {
        specGroupID: groupId,
        specValues: [],
      };
      newSpecGroup.specValues[specIndex] = value;
      updatedSpecs.push(newSpecGroup);
    }

    setSpecifications(updatedSpecs);
  };

  // RENDER FORM
  return (
    <div className={styles.container}>
      {contextHolder}
      <h4>Thêm sản phẩm</h4>
      <Breadcrumb
        items={[
          {
            key: 1,
            href: "/admin",
            title: (
              <>
                <HomeOutlined />
                <span>Trang chủ</span>
              </>
            ),
          },
          {
            key: 2,
            title: "Sản phẩm",
            href: "/admin/products",
          },
          {
            key: 3,
            title: "Thêm sản phẩm",
          },
        ]}
      />

      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        style={{ marginTop: 20 }}
        colon={false}
        onFinish={onFinish}
        disabled={loading}
        initialValues={{
          price: 0,
          salePrice: 0,
          count: 0,
        }}
      >
        <Row gutter={24}>
          {/* name */}
          <Col span={16}>
            <Form.Item
              name="name"
              label="Tên"
              rules={[
                {
                  required: true,
                  type: "string",
                  message: "Vui lòng nhập tên sản phẩm!",
                },
              ]}
            >
              <Input placeholder="Nhập tên sản phẩm..." allowClear />
            </Form.Item>
          </Col>

          {/* avaliable */}
          <Col span={8}>
            <Form.Item label="Tình trạng" name="isAvailable">
              <Radio.Group
                options={optionsRadios}
                defaultValue={true}
              ></Radio.Group>
            </Form.Item>
          </Col>

          {/* feature */}
          <Col span={24}>
            <Form.Item label="Mô tả ngắn">
              <Form.List name="specialFeatures">
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        {...formItemLayout}
                        key={index}
                        required={false}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Vui lòng nhập mô tả hoặc xóa field",
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="Mô tả..."
                            style={{ width: "80%", marginRight: 18 }}
                          />
                        </Form.Item>
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        disabled={fields.length >= 3}
                        type="dashed"
                        onClick={() => add()}
                        icon={<PlusOutlined />}
                      >
                        Thêm mô tả
                      </Button>
                      {errors && <Form.ErrorList errors={errors} />}
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
          </Col>

          {/* price */}
          <Col span={8}>
            <Form.Item
              name="price"
              label="Giá tiền"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập giá sản phẩm!",
                  type: "number",
                },
              ]}
            >
              <InputNumber
                defaultValue={0}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value: any) =>
                  value?.replace(/\$\s?|(,*)/g, "") as unknown as number
                }
                controls={false}
                suffix="VND"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>

          {/* sale price */}
          <Col span={8}>
            <Form.Item name="salePrice" label="Khuyến mãi">
              <InputNumber
                defaultValue={0}
                keyboard
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value: any) =>
                  value?.replace(/\$\s?|(,*)/g, "") as unknown as number
                }
                controls={false}
                suffix="VND"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>

          {/* count */}
          <Col span={8}>
            <Form.Item
              name="count"
              label="Số lượng"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số lượng!",
                  type: "number",
                },
              ]}
            >
              <InputNumber
                defaultValue={0}
                controls={false}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "")
                }
                style={{ width: "100%" }}
                min={0}
                max={100}
              />
            </Form.Item>
          </Col>

          {/* brand */}
          <Col span={12}>
            <Form.Item
              label="Thương hiệu"
              name="brandID"
              rules={[
                {
                  required: true,
                  type: "string",
                  message: "Vui lòng chọn thương hiệu!",
                },
              ]}
            >
              <Select
                options={brandList}
                allowClear
                showSearch
                autoClearSearchValue
                placeholder="Chọn hãng"
                filterOption={(input, option: any) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Form.Item>
          </Col>

          {/* categories */}
          <Col span={12}>
            <Form.Item
              label="Danh mục"
              name="categoryID"
              rules={[
                {
                  required: true,
                  type: "string",
                  message: "Vui lòng chọn danh mục!",
                },
              ]}
            >
              <Select
                options={categoryList}
                allowClear
                showSearch
                autoClearSearchValue
                placeholder="Chọn danh mục"
                filterOption={(input, option: any) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                onChange={handleCategoryChange}
              />
            </Form.Item>
          </Col>

          {/* specifications */}
          {categorySpecs.length > 0 ? (
            <Col span={24}>
              <Form.Item label="Cấu hình sản phẩm">
                <div className={styles.wrapperSpecification}>
                  {categorySpecs.length > 0 ? (
                    <Col span={24}>
                      <Form.Item label="Cấu hình sản phẩm">
                        <div className={styles.wrapperSpecification}>
                          {categorySpecs.map((specGroup, groupIndex) => (
                            <div key={groupIndex}>
                              <Divider
                                orientation="center"
                                plain
                                style={{ margin: 0 }}
                              >
                                <h4 className={styles.header}>
                                  {specGroup.title}
                                </h4>
                              </Divider>

                              {specGroup.specs.map((spec, specIndex) => (
                                <Form.Item
                                  label={spec}
                                  key={specIndex}
                                  rules={[
                                    {
                                      required: true,
                                      type: "string",
                                      message: "Không được bỏ trống!",
                                    },
                                  ]}
                                >
                                  <Input
                                    type="text"
                                    allowClear
                                    value={
                                      specifications.find(
                                        (group) =>
                                          group.specGroupID === specGroup.id,
                                      )?.specValues[specIndex] || ""
                                    }
                                    onChange={(e) =>
                                      handleInputChange(
                                        specGroup.id,
                                        specIndex,
                                        e.target.value,
                                      )
                                    }
                                  />
                                </Form.Item>
                              ))}
                            </div>
                          ))}
                        </div>
                      </Form.Item>
                    </Col>
                  ) : (
                    <></>
                  )}
                </div>
              </Form.Item>
            </Col>
          ) : (
            <></>
          )}

          {/* image */}
          <Col span={24}>
            <Form.Item label="Hình ảnh">
              <Form.List name="images">
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        {...formItemLayout}
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Vui lòng nhập link hình hoặc xóa field",
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="Link hình ảnh"
                            style={{ width: "80%", marginRight: 18 }}
                          />
                        </Form.Item>
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        icon={<PlusOutlined />}
                      >
                        Thêm hình
                      </Button>
                      {errors && <Form.ErrorList errors={errors} />}
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
          </Col>

          {/* desc */}
          <Col span={24}>
            <Form.Item label="Nội dung" name="decs">
              <TextEditor onChange={console.log} />
            </Form.Item>
          </Col>
        </Row>

        <div className={styles.containerButton}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Xác nhận
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default AddProduct;

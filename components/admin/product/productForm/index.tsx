"use client";
import styles from "./productForm.module.scss";

import { getAllBrands } from "@/actions/brands/brands";
import { getAllCategoriesJSON } from "@/actions/category/category";
import { getCategorySpecs } from "@/actions/category/specifications";
import { TGroupJSON } from "@/types/categories";
import { TAddProductFormValues, TBrand } from "@/types/product";
import { TDropDown } from "@/types/uiElements";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { ProductSpec, SpecGroup } from "@prisma/client";
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Radio,
  RadioChangeEvent,
  Select,
} from "antd";
import { useEffect, useState } from "react";

interface IProps {
  formValues: TAddProductFormValues;
  onChange: (props: TAddProductFormValues) => void;
}

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
const ProductForm = ({ formValues: props, onChange }: IProps) => {
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();
  const [categoryList, setCategoryList] = useState<TDropDown[]>([]);
  const [brandList, setBrandList] = useState<TDropDown[]>([]);
  const [selectedCategoryListIndex, setSelectedCategoryListIndex] = useState(0);
  const [selectedBrandListIndex, setSelectedBrandListIndex] = useState(0);

  const [categorySpecs, setCategorySpecs] = useState<SpecGroup[]>([]);

  // ---------------------- GET DATA ----------------------

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

  // ---------------------- HANDLE FORM DATA ----------------------

  const handleCategoryChange = (index: number) => {
    setSelectedCategoryListIndex(index);
    if (index === 0) {
      onChange({
        ...props,
        specifications: JSON.parse(JSON.stringify(props.specifications)),
        categoryID: "",
      });
      setCategorySpecs([]);
    } else {
      const getSpecGrous: any = categoryList.filter(
        (x: any) => x.value === index,
      );
      getSpecGroup(getSpecGrous?.[0]?.value || 0);
    }
  };

  const handleBrandChange = (index: number) => {
    setSelectedBrandListIndex(index);
    onChange({ ...props, brandID: brandList[index].value });
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
      onChange({
        ...props,
        specifications: JSON.parse(JSON.stringify(specArray)),
        categoryID: categoryID,
      });
      setCategorySpecs(response.res);
    }
  };

  const handleSpecialFeatureChange = (index: number, value: string) => {
    const newArray = [...props.specialFeatures];
    newArray[index] = value;
    onChange({ ...props, specialFeatures: newArray });
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    onChange({ ...props, isAvailable: e.target.value });
  };

  return (
    <div className={styles.productForm}>
      {contextHolder}
      <Form
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        initialValues={{
          price: {
            number: 0,
          },
          salePrice: {
            number: 0,
          },
          count: {
            number: 0,
          },
        }}
      >
        {/* name */}
        <Form.Item
          name="name"
          label="Tên"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên sản phẩm!",
            },
          ]}
        >
          <Input
            placeholder="Nhập tên laptop..."
            allowClear
            onChange={(e) => onChange?.({ ...props, name: e.target.value })}
          />
        </Form.Item>

        {/* name */}
        <Form.Item label="Tình trạng">
          <Radio.Group
            options={optionsRadios}
            defaultValue={true}
            onChange={onChangeRadio}
          ></Radio.Group>
        </Form.Item>

        {/* price */}
        <Form.Item name="price" label="Giá tiền">
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

        {/* sale price */}
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

        {/* count */}
        <Form.Item name="count" label="Số lượng">
          <InputNumber
            defaultValue={0}
            min={0}
            max={100}
            style={{ width: "100%" }}
          />
        </Form.Item>

        {/* brand */}
        <Form.Item label="Thương hiệu" name="brandID">
          <Select
            allowClear
            showSearch
            autoClearSearchValue
            placeholder="Chọn hãng"
            filterOption={(input, option: any) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={brandList}
            onChange={handleBrandChange}
          />
        </Form.Item>

        {/* categories */}
        <Form.Item label="Danh mục" name="categoryID">
          <Select
            allowClear
            showSearch
            autoClearSearchValue
            placeholder="Chọn danh mục"
            filterOption={(input, option: any) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={categoryList}
            onChange={handleCategoryChange}
          />
        </Form.Item>

        {/* image */}
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

        {/* desc */}
        <Form.Item label="Nội dung" name="decs">
          <Input.TextArea
            placeholder="Nhập nội dung..."
            allowClear
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
        </Form.Item>
        <Divider plain>Cấu hình</Divider>
        {/* specifications */}
        <div className={styles.specs}>
          <div
            className={styles.specGroups}
            style={{
              display: categorySpecs.length > 0 ? "block" : "flex",
              justifyContent: categorySpecs.length > 0 ? "" : "center",
            }}
          >
            {categorySpecs.length > 0 ? (
              <>
                {categorySpecs.map((specGroup, groupIndex) => (
                  <div className={styles.specGroupRow} key={specGroup.id}>
                    <span className={styles.header}>{specGroup.title}</span>
                    <>
                      {specGroup.specs.map((spec, specIndex) => (
                        <div className={styles.specRow} key={specIndex}>
                          <span>{spec}</span>
                          <input
                            type="text"
                            value={
                              props.specifications[groupIndex]?.specValues[
                                specIndex
                              ]
                            }
                            onChange={(e) => {
                              props.specifications[groupIndex].specValues[
                                specIndex
                              ] = e.currentTarget.value;
                              onChange({ ...props });
                            }}
                          />
                        </div>
                      ))}
                    </>
                  </div>
                ))}
              </>
            ) : (
              <span>Chưa có thông tin cấu hình!</span>
            )}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;

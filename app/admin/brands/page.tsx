"use client";
import { useEffect, useState } from "react";
import styles from "./brands.module.scss";

import {
  addBrand,
  deleteBrand,
  getAllBrands,
  updateBrand,
} from "@/actions/brands/brands";
import HeaderPage from "@/components/admin/header-page";
import Popup from "@/components/UI/popup";
import { TBrand } from "@/types/product";
import { Button, Image, Input, List, message } from "antd";

let selectedBrandID = "";

const Brand = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [addValue, setAddValue] = useState("");
  const [addLogo, setAddLogo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListLoading, setIsListLoading] = useState(true);
  const [brandList, setBrandList] = useState<TBrand[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [editLogo, setEditLogo] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  const fetchBrands = async () => {
    const response = await getAllBrands();
    if (response.error) {
      setBrandList([]);
      setIsListLoading(false);
    }
    if (response.res) {
      setIsListLoading(false);
      setBrandList(response.res);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleAdd = async () => {
    try {
      setIsLoading(true);
      if (addValue !== "" && addLogo !== "") {
        const response = await addBrand(addValue, addLogo);
        if (response.res) {
          setAddValue("");
          setAddLogo("");
          fetchBrands();
        } else {
          messageApi.open({
            type: "error",
            content: `${response.res}`,
          });
        }
      } else {
        messageApi.open({
          type: "error",
          content: "Vui lòng điền thông tin!",
        });
      }
    } catch (e) {
      messageApi.open({
        type: "error",
        content: `${e}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowEdit = (data: TBrand) => {
    selectedBrandID = data.id;
    setEditValue(data.name);
    setEditLogo(data.image);
    setErrorMsg("");
    setShowEdit(true);
  };

  const handleUpdate = async () => {
    if (selectedBrandID !== "" && editValue !== "" && editLogo) {
      setIsLoading(true);
      const response = await updateBrand({
        id: selectedBrandID,
        name: editValue,
        image: editLogo,
      });
      if (response.error) {
        setIsLoading(false);
        setErrorMsg(response.error);
      }
      if (response.res) {
        setIsLoading(false);
        setShowEdit(false);
        fetchBrands();
      }
    }
  };

  const handleShowDelete = (id: string) => {
    selectedBrandID = id;
    setShowDelete(true);
  };

  const handleDelete = async () => {
    if (selectedBrandID !== "") {
      setIsLoading(true);
      const response = await deleteBrand(selectedBrandID);
      if (response.error) {
        setIsLoading(false);
      }
      if (response.res) {
        setIsLoading(false);
        setShowDelete(false);
        fetchBrands();
      }
    }
  };

  return (
    <div className={styles.brands}>
      {contextHolder}
      <HeaderPage />

      <div className={styles.addingSection}>
        <Input
          type="text"
          value={addValue}
          placeholder="Nhập tên nhãn hiệu"
          onChange={(e) => setAddValue(e.currentTarget.value)}
          allowClear
        />
        <Input
          type="text"
          value={addLogo}
          placeholder="Nhập link logo"
          onChange={(e) => setAddLogo(e.currentTarget.value)}
          allowClear
        />
        {addLogo && (
          <Image
            width={100}
            alt="logo"
            src={addLogo}
            preview={false}
            style={{ alignItems: "center" }}
          />
        )}

        <Button disabled={isLoading} onClick={handleAdd} loading={isLoading}>
          Thêm nhãn hiệu
        </Button>
      </div>

      <div className={styles.brandsList}>
        <div className={styles.list}>
          <List
            className={styles.listItem}
            size="small"
            bordered
            loading={isListLoading}
            dataSource={brandList}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <div key="list-action">
                    <Button
                      variant="outlined"
                      color="default"
                      style={{ marginRight: 20 }}
                      onClick={() => handleShowEdit(item)}
                    >
                      Sửa
                    </Button>
                    <Button
                      color="danger"
                      variant="solid"
                      onClick={() => handleShowDelete(item.id)}
                    >
                      Xóa
                    </Button>
                  </div>,
                ]}
              >
                <>
                  {item.name}
                  <Image
                    width={100}
                    alt="logo"
                    src={item.image}
                    preview={false}
                    style={{ alignItems: "center" }}
                  />
                </>
              </List.Item>
            )}
          />
        </div>
      </div>

      {showEdit && (
        <Popup
          width="600px"
          title="Cập nhật"
          content={
            <div className={styles.editSection}>
              <div>
                <span>Tên hãng:</span>
                <Input
                  type="text"
                  value={editValue}
                  placeholder="Nhập tên nhãn hiệu"
                  onChange={(e) => setEditValue(e.currentTarget.value)}
                  allowClear
                />
              </div>
              <span>{errorMsg}</span>
              <div>
                <span>Link logo:</span>
                <Input
                  type="text"
                  value={editLogo}
                  placeholder="Nhập link logo"
                  onChange={(e) => setEditLogo(e.currentTarget.value)}
                  allowClear
                />
                <Image
                  width={100}
                  alt="logo"
                  src={editLogo}
                  preview={false}
                  style={{ alignItems: "center" }}
                />
              </div>
              <span>{errorMsg}</span>
            </div>
          }
          isLoading={isLoading}
          onCancel={() => setShowEdit(false)}
          onClose={() => setShowEdit(false)}
          onSubmit={() => handleUpdate()}
          confirmBtnText="Xác nhận"
          cancelBtnText="No"
        />
      )}
      
      {showDelete && (
        <Popup
          width="300px"
          content={
            <div className={styles.deleteMsg}>Bạn có chắc muốn xóa?</div>
          }
          isLoading={isLoading}
          onCancel={() => setShowDelete(false)}
          onClose={() => setShowDelete(false)}
          onSubmit={() => handleDelete()}
          isDelete
          cancelBtnText="No"
          confirmBtnText="Yes"
        />
      )}
    </div>
  );
};

export default Brand;

"use client";
import { TGetAllCategories, addCategory } from "@/actions/category/category";
import Popup from "@/components/UI/popup";
import { Button, message } from "antd";
import { useState } from "react";
import GroupCategory from "../../forms/groupCategory";
import styles from "./addCategory.module.scss";

interface IProps {
  onReset: () => void;
}

const AddCategoryGroup = ({ onReset }: IProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [showWindow, setShowWindow] = useState<boolean>(false);
  const defaultGroupData: TGetAllCategories = {
    id: "",
    parentID: null,
    name: "",
    url: "",
    iconSize: [10, 10],
    iconUrl: "",
  };
  const [errorMsg, setErrorMsg] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [groupCategoryData, setGroupCategory] =
    useState<TGetAllCategories>(defaultGroupData);

  const handleAddCategories = () => setShowWindow(true);

  const resetForm = () => {
    setGroupCategory(defaultGroupData);
    setErrorMsg("");
    setShowWindow(false);
  };

  const handleAddGroup = async () => {
    const { name, url, iconUrl } = groupCategoryData;
    if (name === "") {
      setErrorMsg("Vui lòng nhập tên nhóm!");
      return;
    }

    if (url === "") {
      setErrorMsg("Vui lòng nhập link ( ví dụ: 'pc-laptops')!");
      return;
    }

    if (iconUrl === "") {
      setErrorMsg("Icon Url is empty!");
      return;
    }

    setButtonDisabled(true);
    try {
      const result = await addCategory(groupCategoryData);
      console.log(result);
      if (result.error) {
        messageApi.open({
          type: "error",
          content: result.error,
        });
      } else {
        setErrorMsg("");
        resetForm();
        onReset();
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: `${error}`,
      });
    } finally {
      setButtonDisabled(false);
    }
  };

  return (
    <div className={styles.addCategoryGroup}>
      {contextHolder}
      <Button onClick={handleAddCategories} type="primary">
        Tạo nhóm danh mục
      </Button>
      {showWindow && (
        <Popup
          title="Tạo nhóm danh mục"
          isLoading={buttonDisabled}
          onSubmit={() => handleAddGroup()}
          onCancel={resetForm}
          onClose={resetForm}
          confirmBtnText="Xác nhận"
          content={
            <GroupCategory
              errorMsg={errorMsg}
              data={groupCategoryData}
              onChange={setGroupCategory}
            />
          }
        />
      )}
    </div>
  );
};

export default AddCategoryGroup;

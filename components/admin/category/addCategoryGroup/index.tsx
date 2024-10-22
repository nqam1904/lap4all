"use client";
import { TGetAllCategories, addCategory } from "@/actions/category/category";
import Popup from "@/components/UI/popup";
import { message } from "antd";
import { useState } from "react";
import GroupCategory from "../../forms/groupCategory";
import styles from "./addCategory.module.scss";

interface IProps {
  onReset: () => void;
  showWindow: boolean;
  onClose: (value: boolean) => void;
}

const AddCategoryGroup = ({ onReset, showWindow, onClose }: IProps) => {
  const [messageApi, contextHolder] = message.useMessage();
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

  const resetForm = () => {
    setGroupCategory(defaultGroupData);
    setErrorMsg("");
    onClose?.(false);
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

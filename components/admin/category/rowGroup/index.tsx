"use client";
import styles from "./rowGroup.module.scss";

import Popup from "@/components/UI/popup";
import { useState } from "react";

import {
  addCategory,
  deleteCategory,
  TAddCategory,
  TGetAllCategories,
  TUpdateCategory,
  updateCategory,
} from "@/actions/category/category";

import GroupCategory from "@/components/admin/forms/groupCategory";
import { Button } from "antd";
import AddCategory from "./addCategory";
import Category from "./category";
import CategoryOptions from "./categoryOptions";

interface IProps {
  data: TGetAllCategories;
  categories: TGetAllCategories[];
  onReset: () => void;
}

let initialCategory: TAddCategory = {
  name: "",
  url: "",
  parentID: null,
  iconSize: [],
  iconUrl: null,
};

const RowCatGroup = ({ data, categories, onReset }: IProps) => {
  const { id: groupId, name } = data;
  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [groupCategoryData, setGroupCategoryData] =
    useState<TGetAllCategories>(data);
  const [addCategoryData, setAddCategoryData] =
    useState<TAddCategory>(initialCategory);

  // ---------------------- FUNCTIONS ----------------------
  const handleUpdateGroup = async () => {
    let updatedData: TUpdateCategory = { id: groupId };

    const keys = ["name", "url", "iconUrl"] as const;

    groupCategoryData.name !== data.name
      ? (updatedData.name = groupCategoryData.name)
      : "";

    groupCategoryData.url !== data.url
      ? (updatedData.url = groupCategoryData.url)
      : "";

    if (
      groupCategoryData.iconUrl &&
      groupCategoryData.iconUrl !== data.iconUrl
    ) {
      updatedData.iconUrl = groupCategoryData.iconUrl;
    }

    setIsLoading(true);
    const response = await updateCategory(updatedData);
    if (!response.error) {
      setShowEdit(false);
      setIsLoading(false);
      setErrorMsg("");
      onReset();
    } else {
      setIsLoading(false);
      setErrorMsg(response.error);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    const response = await deleteCategory(groupId);
    if (response.error) {
      setErrorMsg(response.error);
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setErrorMsg("");
      setIsLoading(false);
      setShowDelete(false);
      onReset();
    }
  };

  const handleAddCategory = async () => {
    if (addCategoryData.name === "") {
      setErrorMsg("Category Name should not be empty");
      return;
    }
    if (addCategoryData.url === "") {
      setErrorMsg("URL should not be empty");
      return;
    }

    const data: TAddCategory = {
      parentID: groupId,
      iconSize: [],
      iconUrl: null,
      name: addCategoryData.name,
      url: addCategoryData.url,
    };
    setIsLoading(true);

    const result = await addCategory(data);

    if (result.error) {
      setIsLoading(false);
      setErrorMsg(result.error);
    }
    if (result.res) {
      setAddCategoryData({
        ...initialCategory,
      });
      setErrorMsg("");
      setIsLoading(false);
      setShowAddCategory(false);
      onReset();
    }
  };

  return (
    <div className={styles.catGroupRow}>
      <span>{name}</span>
      <div>
        <Button onClick={() => setShowOptions(true)}>Cấu hình chi tiết</Button>
        <Button onClick={() => setShowAddCategory(true)}>Thêm danh mục</Button>
      </div>
      <div>
        <Button
          onClick={() => setShowEdit(true)}
          variant="outlined"
          color="primary"
        >
          Update
        </Button>
        <Button
          color="danger"
          variant="solid"
          onClick={() => setShowDelete(true)}
        >
          Delete
        </Button>
      </div>
      {categories.length > 0 && (
        <div className={styles.categories}>
          {categories?.map(
            (cat) =>
              cat.parentID === data.id && (
                <Category
                  data={cat}
                  key={cat.id}
                  subCategories={categories.filter(
                    (c) => c.parentID === cat.id,
                  )}
                  onReset={onReset}
                />
              ),
          )}
        </div>
      )}
      {showOptions ? (
        <Popup
          content={<CategoryOptions categoryID={groupId} categoryName={name} />}
          isLoading={false}
          onClose={() => setShowOptions(false)}
          onCancel={() => setShowOptions(false)}
          onSubmit={() => setShowOptions(false)}
          title=""
        />
      ) : (
        ""
      )}
      {showAddCategory && (
        <Popup
          content={
            <AddCategory
              data={addCategoryData}
              errorMsg={errorMsg}
              onChange={setAddCategoryData}
            />
          }
          width="360px"
          isLoading={isLoading}
          onCancel={() => setShowAddCategory(false)}
          onClose={() => setShowAddCategory(false)}
          onSubmit={() => handleAddCategory()}
          title="Thêm danh mục"
        />
      )}
      {showEdit && (
        <Popup
          content={
            <GroupCategory
              errorMsg={errorMsg}
              data={groupCategoryData}
              onChange={setGroupCategoryData}
            />
          }
          isLoading={isLoading}
          onCancel={() => setShowEdit(false)}
          onClose={() => setShowEdit(false)}
          onSubmit={() => handleUpdateGroup()}
          title={`Cập nhật nhóm: ${data.name}`}
        />
      )}
      {showDelete && (
        <Popup
          content={
            <div className={styles.deleteText}>
              <span>Bạn có chắc muốn xóa?</span>
              <span>{errorMsg}</span>
            </div>
          }
          isLoading={isLoading}
          width="400px"
          onCancel={() => setShowDelete(false)}
          onClose={() => setShowDelete(false)}
          onSubmit={handleDelete}
          isDelete
        />
      )}
    </div>
  );
};

export default RowCatGroup;

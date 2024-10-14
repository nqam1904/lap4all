"use client";
import styles from "./addSpecGroup.module.scss";

import { useState } from "react";
 
import { addOptionSet, addSpecGroup } from "@/actions/category/categoryOptions";
import { TSpecGroup } from "@/types/common";
import { Button } from "antd";

interface IProps {
  categorySpecGroupID: string;
  reloadRequest: () => void;
}

const AddSpecGroup = ({ categorySpecGroupID, reloadRequest }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleAddOption = async () => {
    if (!title || title === "") return;

    const data: TSpecGroup = {
      id: categorySpecGroupID,
      specs: [],
      title,
    };

    setIsLoading(true);
    const result = await addSpecGroup(data);
    if (result.error) {
      setIsLoading(false);
      return;
    }
    if (result.res) {
      setTitle("");
      setIsLoading(false);
      reloadRequest();
    }
  };

  return (
    <div className={styles.addSpecGroup}>
      <div>
        <span>Nhóm:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.currentTarget.value)}
          value={title}
          disabled={isLoading}
        />
      </div>
      <Button disabled={isLoading} onClick={() => handleAddOption()}>
        Thêm nhóm cấu hình
      </Button>
    </div>
  );
};

export default AddSpecGroup;

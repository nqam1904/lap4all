"use client";
import { TGetAllCategories } from "@/actions/category/category";
import styles from "./groupCategory.module.scss";

interface IProps {
  errorMsg: string;
  data: TGetAllCategories;
  onChange: (data: TGetAllCategories) => void;
}

const GroupCategory = ({ errorMsg, data, onChange }: IProps) => {
  // const iconSize: number[] = data.iconSize ? [...data.iconSize] : [];
  return (
    <div className={styles.groupCategoryForm}>
      <div className={styles.row}>
        <span className={styles.col1}>TÊN NHÓM DANH MỤC:</span>
        <input
          name="name"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.currentTarget.value })}
          type="text"
          placeholder="TÊN..."
        />
      </div>
      <div className={styles.row}>
        <span className={styles.col1}>URL:</span>
        <input
          name="url"
          onChange={(e) => onChange({ ...data, url: e.currentTarget.value })}
          type="text"
          placeholder="URL..."
          value={data.url}
        />
      </div>
      <div className={styles.row}>
        <span className={styles.col1}>ICON URL:</span>
        <input
          name="iconUrl"
          onChange={(e) =>
            onChange({ ...data, iconUrl: e.currentTarget.value })
          }
          type="text"
          placeholder="ICON URL..."
          value={data.iconUrl || ""}
        />
      </div>

      {errorMsg !== "" && (
        <div className={styles.row}>
          <span className={styles.error}>{errorMsg}</span>
        </div>
      )}
    </div>
  );
};

export default GroupCategory;

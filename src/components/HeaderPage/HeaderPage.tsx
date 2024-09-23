import { ECategories } from "@/constants/enum";
import { AlignLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./header.module.scss";
type THeaderPage = {
  icon: string;
  title: string;
  name: string;
};
const HeaderPage: React.FC<THeaderPage> = ({
  icon,
  title,
  name,
}: THeaderPage) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.emoji}>{icon}</span>
        {title}
      </h1>
      {name !== ECategories.HOME && (
        <div className={styles.headerButtons}>
          <Button
            icon={<AlignLeftOutlined />}
            size="large"
            className={styles.buttons}
            onClick={() => console.log("click")}
          >
            Sort
          </Button>
        </div>
      )}
    </div>
  );
};
export default HeaderPage;

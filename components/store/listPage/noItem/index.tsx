import Link from "next/link";
import styles from "./noItem.module.scss";

interface IProps {
  pageHeader: string;
}

const NoItem = ({ pageHeader }: IProps) => {
  return (
    <div className={styles.noItemContainer}>
      <span> Không có sản phẩm trong mục {pageHeader}!</span>
      {/* <div>
        <span> Bạn có thể tìm kiếm theo danh mục:</span>
        <div>
          <Link href={"/list/pc-laptops/computer"}>Computers</Link>
          <Link href={"/list/pc-laptops/laptops"}>Laptop</Link>
          <Link href={"/list/smartphones"}>Mobile</Link>
          <Link href={"/list/tablets"}>Tablet</Link>
        </div>
      </div> */}
    </div>
  );
};

export default NoItem;

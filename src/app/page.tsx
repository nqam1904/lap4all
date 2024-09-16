import { Button } from "antd";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <main className={styles.main}>
          <Button type="primary">Button</Button>
        </main>
      </div>
    </div>
  );
}

"use client";
import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, message, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./header.module.scss";

const HeaderAdmin = () => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Admin",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Hồ Sơ",
      icon: <UserOutlined />,
    },
    {
      key: "3",
      label: "Đăng xuất",
      icon: <LogoutOutlined />,
    },
  ];
  const onClick: MenuProps["onClick"] = ({ key }) => {
    messageApi.info(`Click on item ${key}`);
    if (key === "3") {
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }
  };
  return (
    <Header className={styles.container}>
      {contextHolder}
      <div className={styles.item}>
        <Image
          alt="Logo"
          src={"/images/logo.png"}
          width={125}
          height={40}
          quality={100}
          priority
        />
        <span className={styles.title}>Dashboard</span>
      </div>
      <Dropdown menu={{ items, onClick }}>
        <Space align="center">
          <div className={styles.item}>
            <Avatar size={36} src="/images/avatar.png" />
          </div>
          <DownOutlined />
        </Space>
      </Dropdown>
    </Header>
  );
};

export default HeaderAdmin;

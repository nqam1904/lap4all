/* eslint-disable react-hooks/exhaustive-deps */
import { dashboardSideMenu } from "@/data/dummyData";
import {
  AppstoreTwoTone,
  DatabaseTwoTone,
  FolderTwoTone,
  PieChartTwoTone,
  SettingTwoTone,
  TagTwoTone,
} from "@ant-design/icons";
import { Menu } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function SideMenu() {
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState([""]);

  const selectSideMenu = () => {
    const getItemMenu = dashboardSideMenu.find((x) => x?.link === pathname);
    if (pathname.startsWith(`${getItemMenu?.link || ""}`)) {
      setSelectedKey([`${getItemMenu.key}`]);
    }
  };

  useEffect(() => {
    selectSideMenu();
  }, [pathname]);

  const menuItems: ItemType<MenuItemType>[] = [
    {
      label: <Link href="/admin">Trang chủ</Link>,
      key: 1,
      icon: <PieChartTwoTone />,
    },
    {
      label: <Link href="/admin/categories">Danh mục</Link>,
      key: 2,
      icon: <AppstoreTwoTone />,
    },
    {
      label: <Link href="/admin/products">Sản phẩm</Link>,
      key: 3,
      icon: <DatabaseTwoTone />,
    },
    {
      label: <Link href="/admin/brands">Thương hiệu</Link>,
      key: 4,
      icon: <TagTwoTone />,
    },
    {
      label: <Link href="/admin/posts">Bài viết</Link>,
      key: 5,
      icon: <FolderTwoTone />,
    },
    { type: "divider" },
    {
      label: <Link href="/admin/settings">Cài đặt</Link>,
      key: 6,
      icon: <SettingTwoTone />,
    },
  ];
  return <Menu mode="inline" items={menuItems} selectedKeys={selectedKey} />;
}

export default SideMenu;

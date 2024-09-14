"use client";
import { Layout } from "antd";
const { Footer: AntFooter } = Layout;

function Footer() {
  return (
    <AntFooter style={{ textAlign: "center" }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </AntFooter>
  );
}

export default Footer;

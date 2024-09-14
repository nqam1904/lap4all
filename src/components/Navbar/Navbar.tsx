"use client";
import { Col, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import "./styles.scss";

function Navbar() {
  return (
    <Header className="header-layout">
      <Row>
        <Col flex="100px">
          <div className="logo">Logo</div>
        </Col>
        <Col flex="auto">
          <Menu
            // theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1">Trang chủ</Menu.Item>
            <Menu.Item key="2">Sản phẩm</Menu.Item>
            <Menu.Item key="3">Dịch vụ</Menu.Item>
            <Menu.Item key="4">Giới thiệu</Menu.Item>
            <Menu.Item key="5">Liên hệ</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
}

export default Navbar;

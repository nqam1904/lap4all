"use client";
import { GoogleOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Flex, Form, FormProps, Image, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./login.module.scss";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loadings, setLoadings] = useState<boolean>(false);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    setLoadings(true);
    setTimeout(() => {
      router.push("/admin");
    }, 3000);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };
  const handleLogin = async () => {
    // signIn("credentials", {
    //   ...loginData,
    //   redirect: false,
    // }).then((callback) => {
    //   if (callback?.ok) {
    //     router.push("/admin");
    //   }
    //   if (callback?.error) {
    //     setError(callback.error);
    //   }
    // });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image width={150} alt="logo" src="/images/logo.png" preview={false} />
      </div>
      <div className={styles.login}>
        <div className={styles.wrapper}>
          <span>Đăng nhập</span>
          <Form
            name="basic"
            initialValues={{
              ["username"]: "admin",
              ["password"]: "123123",
            }}
            onFinish={onFinish}
            style={{ marginTop: 12 }}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Vui lòng nhập tên đăng nhập!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Mật khẩu"
                allowClear
              />
            </Form.Item>
            {/* BUTTON */}
            <Form.Item>
              <Flex
                gap="middle"
                flex={"space-between"}
                style={{ marginTop: 12 }}
              >
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  loading={loadings}
                >
                  Đăng nhập
                </Button>
                <Button type="default" block danger icon={<GoogleOutlined />}>
                  Google
                </Button>
              </Flex>
            </Form.Item>
            {/* FOOTER */}
            {/* <span className={styles.text_forget_password}>Quên mật khẩu</span> */}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

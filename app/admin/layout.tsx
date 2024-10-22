import HeaderAdmin from "@/components/admin/header";
import SideBar from "@/components/admin/side-bar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import { Metadata } from "next";
import localFont from "next/font/local";

const outfitFont = localFont({
  src: "../../public/fonts/Outfit-VariableFont.ttf",
  fallback: ["sans-serif", "system-ui", "arial"],
});
export const metadata: Metadata = {
  title: "Dashboard",
};

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect("/");
  // }
  return (
    <html lang="en">
      <body className={outfitFont.className}>
        <AntdRegistry>
          <HeaderAdmin />
          <Layout>
            <SideBar>
              {children}
              {/* <Footer /> */}
            </SideBar>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default AdminLayout;

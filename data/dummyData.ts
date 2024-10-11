import { EMenu } from "@/constants/enum";

const dashboardSideMenu: any[] = [
  {
    key: 1,
    label: "Trang chủ",
    name: EMenu.HOME,
    link: "/admin",
  },
  {
    key: 2,
    title: "Danh mục",
    name: EMenu.CATEGORIES,
    link: "/admin/categories",
  },
  {
    key: 3,
    title: "Sản phẩm",
    name: EMenu.PRODUCTS,
    link: "/admin/products",
  },

  {
    key: 4,
    title: "Thương hiệu",
    name: EMenu.BRANDS,
    link: "/admin/brands",
  },
  {
    key: 5,
    title: "Bài viết",
    name: EMenu.POSTS,
    link: "/admin/posts",
  },
];

export { dashboardSideMenu };

const categoriesData: any[] = [
  {
    id: Date.now(),
    title: "Trang chủ",
    name: "home",
    icon: "⚡",
    link: "/",
  },
  {
    id: Date.now(),
    title: "Sản phẩm",
    name: "products",
    icon: "💻",
    link: "/category/products",
  },
  {
    id: Date.now(),
    title: "Nổi bật",
    name: "featured",
    icon: "🖥️",
    link: "/category/featured",
  },
  {
    id: Date.now(),
    title: "Phụ kiện",
    name: "accessories",
    icon: "🖱️",
    link: "/category/accessories",
  },
  {
    id: Date.now(),
    title: "Quà tặng",
    name: "gifts",
    icon: "🎁",
    link: "/category/gifts",
  },
];

const bannerData: any[] = [
  {
    id: Date.now(),
    url: "https://theme.hstatic.net/200000776097/1001121059/14/home_banner_image_1.jpg?v=691",
  },
  {
    id: Date.now(),
    url: "https://theme.hstatic.net/200000776097/1001121059/14/home_banner_image_2.jpg?v=691",
  },
  {
    id: Date.now(),
    url: "https://theme.hstatic.net/200000776097/1001121059/14/home_banner_image_4.jpg?v=691",
  },
  {
    id: Date.now(),
    url: "https://theme.hstatic.net/200000776097/1001121059/14/home_banner_image_5.jpg?v=691",
  },
];

const productData: any[] = [
  {
    id: Date.now(),
    name: "Macbook Air 2020",
    thumbnail:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/460955069_1294905585007275_2631146355833025232_n.jpg?stp=cp6_dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF8EyTnp0yIclt1ME75UYLr4Csf1MLNht3gKx_Uws2G3crJ2Ti0x7QS-7y2I53_PvT6dDZgXRbUAxdLCANbP_LG&_nc_ohc=hue9bCDzFgcQ7kNvgGZLrt9&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYCpKFNtQw_0fVGeyRyIhIIf2GYwPtQdSSkhGNVdJtMUyg&oe=66F49635",
    shortDescription:
      'Macbook Air 2020 i3 8g 256G 13.3" 2560x1600 Retina máy đẹp chính hãng giá vài triệu thơm thơm ạ 😎',
    alt: "macbook-air",
  },
];

export { bannerData, categoriesData, productData };

import { ECategories } from "./enum";

const categoriesData: any[] = [
  {
    id: Date.now(),
    title: "Trang chủ",
    name: ECategories.HOME,
    icon: "⚡",
    link: "/",
  },
  {
    id: Date.now(),
    title: "Sản phẩm",
    name: ECategories.PRODUCTS,
    icon: "💻",
    link: "/category/products",
  },
  {
    id: Date.now(),
    title: "Nổi bật",
    name: ECategories.FEATURED,
    icon: "🖥️",
    link: "/category/featured",
  },
  {
    id: Date.now(),
    title: "Phụ kiện",
    name: ECategories.ACCESSORIES,
    icon: "🖱️",
    link: "/category/accessories",
  },
  {
    id: Date.now(),
    title: "Quà tặng",
    name: ECategories.GIFTS,
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

const carouselHome: any[] = [
  {
    id: Date.now(),
    url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: Date.now(),
    url: "https://plus.unsplash.com/premium_photo-1673548917645-e8d9ed21e2b2?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: Date.now(),
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: Date.now(),
    url: "https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const productData: any[] = [
  {
    id: Date.now(),
    name: "Dell XPS 13 9340",
    thumbnail:
      "https://synced.sg/cdn/shop/files/AMOLED-43mm-PartNumber010-02903-18.jpg?v=1725764735&width=800",
    shortDescription:
      ' intel Ultra 7 155H 16G 512G 13.4"" FHD+ 120Hz 500nits (New seal) & ( openbox)',
    alt: "Dell XPS 13",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Legion Pro 5 OUTLET",
    thumbnail:
      "https://synced.sg/cdn/shop/files/F165-PartNumber010-02863-A1.jpg?v=1725764770&width=800",
    shortDescription: 'i7 13700HX 16G 512G RTX 4060_8G 16"QHD ips 165Hz',
    alt: "Legion",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Razer Blade 16 OLED 2024",
    thumbnail:
      "https://synced.sg/cdn/shop/files/Prime-2.jpg?v=1706497286&width=800",
    shortDescription: "i9 14900HX ",
    alt: "Razer",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "MSI Raider GE68 2024",
    thumbnail:
      "https://synced.sg/cdn/shop/products/BelkinBoostUpChargeProMagSafe3-in-1_2.png?v=1633456660&width=500",
    shortDescription:
      'i9 14900HX 32G 1Tb RTX 4070 8Gb 16"FHD+ 144hzOpen fullbox -thiếu 10 ngàn là đủ 40 triệu',
    alt: "MSI",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Dell XPS 13 9340",
    thumbnail:
      "https://synced.sg/cdn/shop/files/AMOLED-43mm-PartNumber010-02903-18.jpg?v=1725764735&width=800",
    shortDescription:
      ' intel Ultra 7 155H 16G 512G 13.4"" FHD+ 120Hz 500nits (New seal) & ( openbox)',
    alt: "Dell XPS 13",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Legion Pro 5 OUTLET",
    thumbnail:
      "https://synced.sg/cdn/shop/files/F165-PartNumber010-02863-A1.jpg?v=1725764770&width=800",
    shortDescription: 'i7 13700HX 16G 512G RTX 4060_8G 16"QHD ips 165Hz',
    alt: "Legion",
    price: 12000000,
  },
  {
    id: Date.now(),
    name: "Razer Blade 16 OLED 2024",
    thumbnail:
      "https://synced.sg/cdn/shop/files/Prime-2.jpg?v=1706497286&width=800",
    shortDescription: "i9 14900HX",
    alt: "Razer",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Gaming Dell G15 5530",
    thumbnail:
      "https://synced.sg/cdn/shop/files/TileMateWhite.jpg?v=1714010095&width=500",
    shortDescription: "i7 13650HX 16G 1T RTX 4060_8G 15.6”FHD 165hz",
    alt: "Dell",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Dell XPS 13 9340",
    thumbnail:
      "https://synced.sg/cdn/shop/files/AMOLED-43mm-PartNumber010-02903-18.jpg?v=1725764735&width=800",
    shortDescription:
      ' intel Ultra 7 155H 16G 512G 13.4"" FHD+ 120Hz 500nits (New seal) & ( openbox)',
    alt: "Dell XPS 13",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Legion Pro 5 OUTLET",
    thumbnail:
      "https://synced.sg/cdn/shop/files/F165-PartNumber010-02863-A1.jpg?v=1725764770&width=800",
    shortDescription: 'i7 13700HX 16G 512G RTX 4060_8G 16"QHD ips 165Hz',
    alt: "Legion",
    price: 12000000,
  },
  {
    id: Date.now(),
    name: "Razer Blade 16 OLED 2024",
    thumbnail:
      "https://synced.sg/cdn/shop/files/Prime-2.jpg?v=1706497286&width=800",
    shortDescription: "i9 14900HX",
    alt: "Razer",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Gaming Dell G15 5530",
    thumbnail:
      "https://synced.sg/cdn/shop/files/TileMateWhite.jpg?v=1714010095&width=500",
    shortDescription: "i7 13650HX 16G 1T RTX 4060_8G 15.6”FHD 165hz",
    alt: "Dell",
    price: 1200000,
  },
];

const productFeatureData: any[] = [
  {
    id: Date.now(),
    name: "Dell XPS 13 9340",
    thumbnail:
      "https://synced.sg/cdn/shop/files/AMOLED-43mm-PartNumber010-02903-18.jpg?v=1725764735&width=800",
    shortDescription:
      ' intel Ultra 7 155H 16G 512G 13.4"" FHD+ 120Hz 500nits (New seal) & ( openbox)',
    alt: "Dell XPS 13",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Legion Pro 5 OUTLET",
    thumbnail:
      "https://synced.sg/cdn/shop/files/F165-PartNumber010-02863-A1.jpg?v=1725764770&width=800",
    shortDescription: 'i7 13700HX 16G 512G RTX 4060_8G 16"QHD ips 165Hz',
    alt: "Legion",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Razer Blade 16 OLED 2024",
    thumbnail:
      "https://synced.sg/cdn/shop/files/Prime-2.jpg?v=1706497286&width=800",
    shortDescription: "i9 14900HX ",
    alt: "Razer",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "MSI Raider GE68 2024",
    thumbnail:
      "https://synced.sg/cdn/shop/products/BelkinBoostUpChargeProMagSafe3-in-1_2.png?v=1633456660&width=500",
    shortDescription:
      'i9 14900HX 32G 1Tb RTX 4070 8Gb 16"FHD+ 144hzOpen fullbox -thiếu 10 ngàn là đủ 40 triệu',
    alt: "MSI",
    price: 1200000,
  },
];

export {
  bannerData,
  carouselHome,
  categoriesData,
  productData,
  productFeatureData,
};

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
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/458794579_1286345369196630_179790497229718910_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFovtRq_Sfj55YdSb853QsVxGK96zqwzcXEYr3rOrDNxbHNBxILkp5-p8N3g7ewkvAxN2Qv0DmCGeNm-UzpIYAN&_nc_ohc=MY50xtM50RkQ7kNvgFjb78l&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYCc1ubfIPu2lBo4yBloMR0d4hek42jG3DCpEauCPuvFrA&oe=66F5A1AF",
    shortDescription: "i9 14900HX ",
    alt: "Razer",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "MSI Raider GE68 2024",
    thumbnail:
      "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/460902998_1295361614961672_1249377549356885191_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHF8fwhtUeOi3_7XSoKYRn7nnVjifKIrciedWOJ8oityKNc3LICBHkuhIW1QNKCYy93kFzxJzYFKKs59Hq24-zj&_nc_ohc=JKy0ACLO3r8Q7kNvgGz0TO0&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=AUaJ5WX_oDQxB4D5JNw874t&oh=00_AYCahsgv6ClBWfcnVHOwljfiIpbNIL37vTAgI4MIaMAbcw&oe=66F57C46",
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
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/458794579_1286345369196630_179790497229718910_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFovtRq_Sfj55YdSb853QsVxGK96zqwzcXEYr3rOrDNxbHNBxILkp5-p8N3g7ewkvAxN2Qv0DmCGeNm-UzpIYAN&_nc_ohc=MY50xtM50RkQ7kNvgFjb78l&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYCc1ubfIPu2lBo4yBloMR0d4hek42jG3DCpEauCPuvFrA&oe=66F5A1AF",
    shortDescription: "i9 14900HX",
    alt: "Razer",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Gaming Dell G15 5530",
    thumbnail:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/458715357_1284891766008657_7856615116562258594_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGRzVmS38Xxb9QiPAWIxHjZnE8dSij5cmucTx1KKPlya1pJbW4YjRspUycEnWQvI6c6uW58vTq62MI4bDQT-kYZ&_nc_ohc=NNaVdV6E55UQ7kNvgHl6D_I&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=A9HVnH3q_4jHrQsa77RGkmo&oh=00_AYDDhwDxSf8dfLLNFCglpez9Pil3A3wzi9VF-2s6s3fmzQ&oe=66F62E76",
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
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/458794579_1286345369196630_179790497229718910_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFovtRq_Sfj55YdSb853QsVxGK96zqwzcXEYr3rOrDNxbHNBxILkp5-p8N3g7ewkvAxN2Qv0DmCGeNm-UzpIYAN&_nc_ohc=MY50xtM50RkQ7kNvgFjb78l&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYCc1ubfIPu2lBo4yBloMR0d4hek42jG3DCpEauCPuvFrA&oe=66F5A1AF",
    shortDescription: "i9 14900HX",
    alt: "Razer",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "Gaming Dell G15 5530",
    thumbnail:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/458715357_1284891766008657_7856615116562258594_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGRzVmS38Xxb9QiPAWIxHjZnE8dSij5cmucTx1KKPlya1pJbW4YjRspUycEnWQvI6c6uW58vTq62MI4bDQT-kYZ&_nc_ohc=NNaVdV6E55UQ7kNvgHl6D_I&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=A9HVnH3q_4jHrQsa77RGkmo&oh=00_AYDDhwDxSf8dfLLNFCglpez9Pil3A3wzi9VF-2s6s3fmzQ&oe=66F62E76",
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
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/458794579_1286345369196630_179790497229718910_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFovtRq_Sfj55YdSb853QsVxGK96zqwzcXEYr3rOrDNxbHNBxILkp5-p8N3g7ewkvAxN2Qv0DmCGeNm-UzpIYAN&_nc_ohc=MY50xtM50RkQ7kNvgFjb78l&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYCc1ubfIPu2lBo4yBloMR0d4hek42jG3DCpEauCPuvFrA&oe=66F5A1AF",
    shortDescription: "i9 14900HX ",
    alt: "Razer",
    price: 1200000,
  },
  {
    id: Date.now(),
    name: "MSI Raider GE68 2024",
    thumbnail:
      "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/460902998_1295361614961672_1249377549356885191_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHF8fwhtUeOi3_7XSoKYRn7nnVjifKIrciedWOJ8oityKNc3LICBHkuhIW1QNKCYy93kFzxJzYFKKs59Hq24-zj&_nc_ohc=JKy0ACLO3r8Q7kNvgGz0TO0&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=AUaJ5WX_oDQxB4D5JNw874t&oh=00_AYCahsgv6ClBWfcnVHOwljfiIpbNIL37vTAgI4MIaMAbcw&oe=66F57C46",
    shortDescription:
      'i9 14900HX 32G 1Tb RTX 4070 8Gb 16"FHD+ 144hzOpen fullbox -thiếu 10 ngàn là đủ 40 triệu',
    alt: "MSI",
    price: 1200000,
  },
];
export { bannerData, categoriesData, productData, productFeatureData };

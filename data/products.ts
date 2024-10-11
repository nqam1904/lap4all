import { TProductCard } from "@/types/common";

export const ProductsData: TProductCard[] = [
  {
    name: "Apple Airpods Pro",
    imgUrl: ["airpods1.jpg", "airpods2.jpg"],
    price: 129.99,
    specs: ["Built-In Microphone", "3rd generation", "Water Resistant"],
    url: "/product/1",
  },
  {
    name: "Apple Watch Ultra 2",
    imgUrl: ["appleWatch1.jpg", "appleWatch2.jpg"],
    price: 799.0,
    specs: ["GPS + Cellular", "Titanium", "49mm"],
    url: "/product/2",
  },
  {
    name: "ASUS ROG Laptop",
    imgUrl: ["asusRog1.jpg", "asusRog2.jpg"],
    price: 2499.99,
    dealPrice: 2149.99,
    specs: ["32GB RAM", "17inch display", "OLED Display"],
    url: "/product/3",
  },
  {
    name: "PS5 Controller",
    imgUrl: ["ps5Controller1.jpg", "ps5Controller2.jpg"],
    price: 69,
    specs: ["Bluetooth", "Version 2"],
    url: "/product/4",
  },
  {
    name: "Sony Alpha 7RV",
    imgUrl: ["sonyAlpha7_1.jpg", "sonyAlpha7_2.jpg"],
    price: 4499,
    specs: ["Full Frame", "Body", "40MP"],
    dealPrice: 3699,
    url: "/product/5",
  },
  {
    name: "ASUS ROG Laptop",
    imgUrl: ["asusRog1.jpg", "asusRog2.jpg"],
    price: 2499.99,
    specs: ["32GB RAM", "17inch display", "OLED Display"],
    url: "/product/6",
  },
  {
    name: "Apple Airpods Pro",
    imgUrl: ["airpods1.jpg", "airpods2.jpg"],
    price: 129.99,
    specs: ["Built-In Microphone", "3rd generation", "Water Resistant"],
    url: "/product/7",
  },
];

export const productDetail = {
  id: "65e6f7469d4ab819d11581a1",
  name: "MSI Raider GE68 2024 (New Openbox)",
  isAvailable: true,
  desc: "Cấu hình:- i9 14900HX 32G 1Tb RTX 4070 8Gb 16'FHD+ 144hzOpen fullbox -thiếu 10 ngàn là đủ 40 triệu",
  images: [
    {
      url: "/images/products/monitor1.jpg",
      priority: 1,
      label: "",
    },
    {
      url: "/images/products/monitor2.jpg",
      priority: 2,
      label: "",
    },
    {
      url: "/images/products/monitor3.jpg",
      priority: 3,
      label: "",
    },
    {
      url: "/images/products/monitor4.jpg",
      priority: 4,
      label: "",
    },
    {
      url: "/images/products/monitor5.jpg",
      priority: 5,
      label: "",
    },
    // {
    //   url: "/images/products/msi6.jpg",
    //   priority: 6,
    //   label: "",
    // },
  ],
  optionSets: [],
  specialFeatures: ["i9 14900HX", "32G", "1Tb", "RTX 4070"],
  price: 40000000,
  salePrice: 35000000,
  specifications: [
    {
      groupName: "Tổng thể",
      specs: [
        {
          name: "Kích thước",
          value: "22.83 cm x 1.89 cm x 18.9 mm",
        },
        {
          name: "Khối lượng",
          value: "2.3 kg",
        },
      ],
    },
    {
      groupName: "Màn hình",
      specs: [
        {
          name: "Loại",
          value: "Full HD IPS",
        },
        {
          name: "Tần số quét",
          value: "144Hz",
        },
        {
          name: "Độ phân giải",
          value: "15.6' (1920 x 1080)",
        },
      ],
    },
    {
      groupName: "Thế hệ chip",
      specs: [
        {
          name: "CPU",
          value:
            "AMD Ryzen™ 5 7535HS ( 3.3 GHz - 4.5 GHz / 16MB / 6 nhân, 12 luồng )",
        },
      ],
    },
    {
      groupName: "Chip đồ họa",
      specs: [
        {
          name: "VGA",
          value: "GeForce RTX™ 2050 4GB GDDR6 AMD Radeon 660M",
        },
      ],
    },
    {
      groupName: "Lưu trữ",
      specs: [
        {
          name: "Ổ cứng",
          value: "512GB SSD M.2 NVMe",
        },
      ],
    },
    {
      groupName: "Hệ điều hành",
      specs: [
        {
          name: "OS",
          value: "Windows 11 Home",
        },
      ],
    },
    {
      groupName: "Thông tin khác",
      specs: [
        {
          name: "Bảo mật",
          value: "Khuôn mặt",
        },
      ],
    },
  ],
  path: [
    {
      id: "0",
      url: "pc-laptops",
      name: "Computers & Laptop",
    },
    {
      id: "2",
      url: "laptops",
      name: "Laptops",
    },
    {
      id: "12",
      url: "msi",
      name: "MSI",
    },
  ],
};

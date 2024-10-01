import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Laptop - Product",
};

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default ProductLayout;

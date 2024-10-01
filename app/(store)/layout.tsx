"use client";
import StoreNavBar from "@/components/store/navbar";
import { shoppingCartStore } from "@/store/shoppingCart";
import { Provider } from "react-redux";
import StoreFooter from "./../../components/store/footer/index";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Provider store={shoppingCartStore}>
        <StoreNavBar />
        {children}
        {/* <StoreFooter /> */}
      </Provider>
    </main>
  );
};

export default StoreLayout;

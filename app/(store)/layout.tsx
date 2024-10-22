"use client";
import Footer from "@/components/store/footer";
import StoreNavBar from "@/components/store/navbar";
import { shoppingCartStore } from "@/store/shoppingCart";
import { Provider } from "react-redux";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Provider store={shoppingCartStore}>
        <StoreNavBar />
        {children}
        <Footer />
      </Provider>
    </main>
  );
};

export default StoreLayout;

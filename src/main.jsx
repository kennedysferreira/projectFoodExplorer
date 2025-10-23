import React from "react";
import { Routes } from "./routes";
import { theme } from "./style/theme";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./style/global";
import { AuthProvider } from "./hooks/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "./hooks/useCart";
import { PlateProvider } from "./hooks/plateRequest";
import { AddressProvider } from "./hooks/useAddresses";
import { OrderProvider } from "./hooks/useOrders";
import { LoyaltyProvider } from "./hooks/useLoyalty";
import { CouponProvider } from "./hooks/useCoupons";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <CartProvider>
          <PlateProvider>
            <AddressProvider>
              <OrderProvider>
                <LoyaltyProvider>
                  <CouponProvider>
                    <Routes />
                    <ToastContainer
                      position="top-right"
                      autoClose={3000}
                      hideProgressBar={false}
                      newestOnTop
                      closeOnClick
                      pauseOnHover
                      theme="dark"
                    />
                  </CouponProvider>
                </LoyaltyProvider>
              </OrderProvider>
            </AddressProvider>
          </PlateProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

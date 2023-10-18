import React from "react";
import "./styles/global/_settings.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Looks } from "./pages/Looks";
import { Collections } from "./pages/Collections/Collections";
import { Broadcasts } from "./pages/Broadcasts/Broadcasts";
import { PageNotFound } from "./pages/PageNotFound";
import { Contacts } from "./pages/Contacts/Contacts";
import { Delivery } from "./pages/Delivery";
import { Payment } from "./pages/Payment";
import { Exchange } from "./pages/Exchange";
import { Care } from "./pages/Care";
import { Privacy } from "./pages/Privacy";
import { Stores } from "./pages/Contacts/Stores";
import { AnimatedPage } from "./components/AnimatedPage";
import { Collection } from "./pages/Collections/Collection";
import { ScrollToTop } from "./components/ScrollToTop";
import { Product } from "./pages/Catalog/Product";
import { Broadcast } from "./pages/Broadcasts/Broadcast";
import { Profile } from "./pages/Profile/Profile";
import { Wishlist } from "./pages/Profile/Wishlist";
import { Orders } from "./pages/Profile/Orders";
import { Settings } from "./pages/Profile/Settings";
import { Addresses } from "./pages/Profile/Addresses";
import { Checkout } from "./pages/Checkout";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedPage>
          <Navigation />
          <Routes>
            <Route path={"/home"} element={<Home />} />
            <Route path={"/"} element={<Navigate to={"/home"} />} />
            <Route path={"/catalog"} element={<Catalog />} />
            <Route path={"/catalog/product"} element={<Product />} />
            <Route path={"/looks"} element={<Looks />} />
            <Route path={"/collections"} element={<Collections />} />
            <Route path={"/collections/collection"} element={<Collection />} />
            <Route path={"/broadcasts"} element={<Broadcasts />} />
            <Route path={"/broadcasts/broadcast"} element={<Broadcast />} />
            <Route path={"/contacts"} element={<Contacts />} />
            <Route path={"/contacts/stores"} element={<Stores />} />
            <Route path={"/delivery"} element={<Delivery />} />
            <Route path={"/payment"} element={<Payment />} />
            <Route path={"/exchange"} element={<Exchange />} />
            <Route path={"/care"} element={<Care />} />
            <Route path={"/privacy"} element={<Privacy />} />
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/profile/wishlist"} element={<Wishlist />} />
            <Route path={"/profile/orders"} element={<Orders />} />
            <Route path={"/profile/addresses"} element={<Addresses />} />
            <Route path={"/profile/settings"} element={<Settings />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"*"} element={<PageNotFound />} />
          </Routes>
        </AnimatedPage>
      </BrowserRouter>
    </div>
  );
};

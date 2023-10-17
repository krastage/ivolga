import React from 'react';
import './styles/global/_settings.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Looks } from './pages/Looks';
import { Collections } from './pages/Collections';
import { Broadcasts } from './pages/Broadcasts';
import { PageNotFound } from './pages/PageNotFound';
import { Contacts } from './pages/Contacts';
import { Delivery } from './pages/Delivery';
import { Payment } from './pages/Payment';
import { Exchange } from './pages/Exchange';
import { Care } from './pages/Care';
import { Privacy } from './pages/Privacy';
import { Address } from './pages/Address';
import { AnimatedPage } from './components/AnimatedPage';
import { Collection } from './pages/Collection';
import { ScrollToTop } from './components/ScrollToTop';
import { Product } from './pages/Product';
import { Broadcast } from './pages/Broadcast';
import { Profile } from './pages/Profile';
import { Wishlist } from './pages/Wishlist';
import { Orders } from './pages/Orders';
import { Settings } from './pages/Settings';
import { Addresses } from './pages/Addresses';
import {Order} from './pages/Order';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedPage>
          <Navigation />
          <Routes>
            <Route path={'/home'} element={<Home />} />
            <Route path={'/'} element={<Navigate to={'/home'} />} />
            <Route path={'/catalog'} element={<Catalog />} />
            <Route path={'/catalog/product'} element={<Product />} />
            <Route path={'/looks'} element={<Looks />} />
            <Route path={'/collections'} element={<Collections />} />
            <Route path={'/collections/collection'} element={<Collection />} />
            <Route path={'/broadcasts'} element={<Broadcasts />} />
            <Route path={'/broadcasts/broadcast'} element={<Broadcast />} />
            <Route path={'/contacts'} element={<Contacts />} />
            <Route path={'/contacts/address'} element={<Address />} />
            <Route path={'/delivery'} element={<Delivery />} />
            <Route path={'/payment'} element={<Payment />} />
            <Route path={'/exchange'} element={<Exchange />} />
            <Route path={'/care'} element={<Care />} />
            <Route path={'/privacy'} element={<Privacy />} />
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/profile/wishlist'} element={<Wishlist />} />
            <Route path={'/profile/orders'} element={<Orders />} />
            <Route path={'/profile/addresses'} element={<Addresses />} />
            <Route path={'/profile/settings'} element={<Settings />} />
            <Route path={'/order'} element={<Order />} />
            <Route path={'*'} element={<PageNotFound />} />
          </Routes>
        </AnimatedPage>
      </BrowserRouter>
    </div>
  );
}

export default App;

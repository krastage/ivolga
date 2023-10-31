import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Broadcasts from './modules/broadcasts/ui';
import Broadcast from './modules/broadcasts/ui/components/broadcast';
import Catalog from './modules/catalog/ui';
import Checkout from './modules/checkout/ui';
import SuccessCheckout from './modules/checkout/ui/components/success';
import UnsuccessfulCheckout from './modules/checkout/ui/components/unsuccess';
import Collections from './modules/collections/ui';
import Collection from './modules/collections/ui/components/collection/components';
import Contacts from './modules/contacts/ui/components/contacts';
import Stores from './modules/contacts/ui/components/stores';
import Care from './modules/faq/ui/components/care';
import Delivery from './modules/faq/ui/components/delivery';
import Exchange from './modules/faq/ui/components/exchange';
import Payment from './modules/faq/ui/components/payment';
import Privacy from './modules/faq/ui/components/privacy';
import Home from './modules/home/ui';
import Looks from './modules/looks/ui';
import Navigation from './modules/navigation/ui';
import PageNotFound from './modules/page-not-found/ui';
import Product from './modules/products/ui';
import Addresses from './modules/profile/ui/components/addresses';
import AddAddress from './modules/profile/ui/components/addresses/components/add-address';
import Orders from './modules/profile/ui/components/orders';
import Order from './modules/profile/ui/components/orders/components/order';
import Profile from './modules/profile/ui/components/profile';
import Settings from './modules/profile/ui/components/settings';
import Wishlist from './modules/profile/ui/components/wishlist';
import './styles/global/_settings.scss';
import ScrollToTopButton from './ui/buttons/ScrollToTopButton';
import AnimatedPage from './utils/AnimatedPage';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <AnimatedPage>
          <Navigation />
          <Routes>
            <Route path={'/home'} element={<Home />} />
            <Route path={'/'} element={<Navigate to={'/home'} />} />
            <Route path={'/catalog'} element={<Catalog />} />
            <Route path={'/product'} element={<Product />} />
            <Route path={'/looks'} element={<Looks />} />
            <Route path={'/collections'} element={<Collections />} />
            <Route path={'/collections/collection'} element={<Collection />} />
            <Route path={'/broadcasts'} element={<Broadcasts />} />
            <Route path={'/broadcasts/broadcast'} element={<Broadcast />} />
            <Route path={'/contacts'} element={<Contacts />} />
            <Route path={'/contacts/stores'} element={<Stores />} />
            <Route path={'/delivery'} element={<Delivery />} />
            <Route path={'/payment'} element={<Payment />} />
            <Route path={'/exchange'} element={<Exchange />} />
            <Route path={'/care'} element={<Care />} />
            <Route path={'/privacy'} element={<Privacy />} />
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/profile/wishlist'} element={<Wishlist />} />
            <Route path={'/profile/orders'} element={<Orders />} />
            <Route path={'/profile/orders/order'} element={<Order />} />
            <Route path={'/profile/addresses'} element={<Addresses />} />
            <Route path={'/profile/addresses/add'} element={<AddAddress />} />
            <Route path={'/profile/settings'} element={<Settings />} />
            <Route path={'/checkout'} element={<Checkout />} />
            <Route path={'/checkout/success'} element={<SuccessCheckout />} />
            <Route path={'/checkout/unsuccessful'} element={<UnsuccessfulCheckout />} />
            <Route path={'*'} element={<PageNotFound />} />
          </Routes>
        </AnimatedPage>
      </BrowserRouter>
    </div>
  );
};

export default App;

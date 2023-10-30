import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Broadcast from './pages/Broadcasts/Broadcast';
import Broadcasts from './pages/Broadcasts/Broadcasts';
import Care from './pages/Care';
import Catalog from './pages/Catalog';
import Checkout from './pages/Checkout/Checkout';
import SuccessCheckout from './pages/Checkout/SuccessCheckout';
import UnsuccessfulCheckout from './pages/Checkout/UnsuccessfulCheckout';
import Collection from './pages/Collections/Collection';
import Collections from './pages/Collections/Collections';
import Contacts from './pages/Contacts/Contacts';
import Stores from './pages/Contacts/Stores';
import Delivery from './pages/Delivery';
import Exchange from './pages/Exchange';
import Home from './pages/Home';
import Looks from './pages/Looks';
import PageNotFound from './pages/PageNotFound';
import Payment from './pages/Payment';
import Privacy from './pages/Privacy';
import Product from './pages/Product';
import AddAddress from './pages/Profile/Addresses/AddAddress';
import Addresses from './pages/Profile/Addresses/Addressess';
import Order from './pages/Profile/Orders/Order';
import Orders from './pages/Profile/Orders/Orders';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Profile/Settings';
import Wishlist from './pages/Profile/Wishlist';
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

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTopButton from './modules/ud-ui/buttons/ScrollToTopButton';
import AnimatedPage from './modules/utils/AnimatedPage';
import ScrollToTop from './modules/utils/ScrollToTop';

const Home = lazy(() => import('./modules/home/ui'));
const Catalog = lazy(() => import('./modules/catalog/ui'));
const Product = lazy(() => import('./modules/products/ui'));
const Looks = lazy(() => import('./modules/looks/ui'));
const Collections = lazy(() => import('./modules/collections/ui'));
const Collection = lazy(() => import('./modules/collections/ui/components/collection/components'));
const Broadcasts = lazy(() => import('./modules/broadcasts/ui'));
const Broadcast = lazy(() => import('./modules/broadcasts/ui/components/broadcast'));
const Contacts = lazy(() => import('./modules/contacts/ui/components/contacts'));
const Stores = lazy(() => import('./modules/contacts/ui/components/stores'));
const Delivery = lazy(() => import('./modules/faq/ui/components/delivery'));
const Exchange = lazy(() => import('./modules/faq/ui/components/exchange'));
const Payment = lazy(() => import('./modules/faq/ui/components/payment'));
const Privacy = lazy(() => import('./modules/faq/ui/components/privacy'));
const Care = lazy(() => import('./modules/faq/ui/components/care'));
const Profile = lazy(() => import('./modules/profile/ui/components/profile'));
const Wishlist = lazy(() => import('./modules/profile/ui/components/wishlist'));
const Orders = lazy(() => import('./modules/profile/ui/components/orders'));
const Order = lazy(() => import('./modules/profile/ui/components/orders/components/order'));
const Addresses = lazy(() => import('./modules/profile/ui/components/addresses'));
const AddAddress = lazy(() => import('./modules/profile/ui/components/addresses/components/add-address'));
const Settings = lazy(() => import('./modules/profile/ui/components/settings'));
const Checkout = lazy(() => import('./modules/checkout/ui'));
const SuccessCheckout = lazy(() => import('./modules/checkout/ui/components/success'));
const UnsuccessfulCheckout = lazy(() => import('./modules/checkout/ui/components/unsuccess'));
const PageNotFound = lazy(() => import('./modules/page-not-found/ui'));
const Navigation = lazy(() => import('./modules/navigation/ui'));

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <AnimatedPage>
          <Suspense>
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
          </Suspense>
        </AnimatedPage>
      </BrowserRouter>
    </div>
  );
};

export default App;

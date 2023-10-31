/**
 * Страница "Каталог"
 */

import { useState } from 'react';
import '../../../styles/_settings.scss';
import '../../../styles/Catalog.scss';
import AnimatedPage from '../../../utils/AnimatedPage';
import Footer from '../../footer/ui';
import ProductCard from '../../ud-ui/layouts/products/product-card';
import ProductsCardList from '../../ud-ui/layouts/products/product-card-list';

const Catalog = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  const [filtersActivated, setFiltersActivated] = useState(false);

  const products = [
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 0,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 1,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 1,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 2,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 0,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 2,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 1,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 2,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 2,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 1,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 0,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25_000,
      imageSource: '/assets/img/products/product.png',
      type: 2,
    },
  ];

  const filteredProducts =
    selectedTypes.length === 0
      ? products
      : products.filter((product) => selectedTypes.includes(product.type));

  const handleFilterChange = (value) => {
    setFiltersActivated(true);

    if (selectedTypes.includes(Number(value))) {
      setSelectedTypes(selectedTypes.filter((type) => type !== Number(value)));
      setFilterActive(false);
      return;
    }
    setSelectedTypes([...selectedTypes, Number(value)]);
  };

  const resetFilter = () => {
    setSelectedTypes([]);
    setFiltersActivated(false);
    setFilterActive(false);
  };

  return (
    <AnimatedPage>
      <>
        <main className='content'>
          <div className='catalog-collection'>
            <div className='catalog__banner'>
              <img
                src='/assets/img/products/hero1.png'
                alt='hero1'
                className='main-content__banner-img'
              />
            </div>
            {filteredProducts.length === 0 ? (
              <AnimatedPage>
                <div className='products-card-container__content'>
                  <h1>Товары не найдены</h1>
                  <button className='products-card-container__reset-button' onClick={resetFilter}>
                    Сбросить фильтры
                  </button>
                </div>
              </AnimatedPage>
            ) : (
              <div className='container'>
                <div className='products-card-container__content'>
                  <ProductsCardList
                    title={'Бестселлеры'}
                    filterButton={true}
                    itemsPerRow={4}
                    filteredProducts={filteredProducts}
                    handleFilterChange={handleFilterChange}
                    resetFilter={resetFilter}
                    filterActive={filterActive}
                    filtersActivated={filtersActivated}
                    children={filteredProducts.map((product, index) => (
                      <ProductCard
                        key={index}
                        size={product.size}
                        link={product.link}
                        title={product.title}
                        price={product.price}
                        imageSource={product.imageSource}
                        type={product.type}
                      />
                    ))}
                  />
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
};
export default Catalog;

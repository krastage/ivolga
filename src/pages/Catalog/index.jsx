/**
 * Страница "Каталог"
 */

import { useState } from 'react';
import Footer from '../../components/Footer';
import ProductCard from '../../layouts/ProductCard';
import ProductsCardList from '../../layouts/ProductsCardList';
import '../../styles/global/_settings.scss';
import '../../styles/pages/Catalog.scss';
import AnimatedPage from '../../utils/AnimatedPage';

const Catalog = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  const [filtersActivated, setFiltersActivated] = useState(false);
  const [products, setProducts] = useState([
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 0,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 1,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 1,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 2,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 0,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 2,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 1,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 2,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 2,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 1,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 0,
    },
    {
      size: 'big',
      link: '/product',
      title: 'Топ черный из кашемира',
      price: 25000,
      imageSource: '/assets/img/products/product.png',
      type: 2,
    },
  ]);

  const filteredProducts =
    selectedTypes.length === 0
      ? products
      : products.filter((product) => selectedTypes.includes(product.type));

  const handleFilterChange = (value) => {
    setFiltersActivated(true);
    if (selectedTypes.includes(value)) {
      setSelectedTypes(selectedTypes.filter((type) => type !== value));
      setFilterActive(false);
    } else {
      setSelectedTypes([...selectedTypes, value]);
    }
  };

  const resetFilter = () => {
    setSelectedTypes([]);
    setFiltersActivated(false);
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
import "../styles/global/_settings.scss";
import "../styles/pages/Catalog.scss";
import { Footer } from "../components/Footer";
import { ProductsCardBig } from "../layouts/ProductsCardBig";
import { ProductsCardList } from "../layouts/ProductsCardList";
import { AnimatedPage } from "../components/AnimatedPage";

export const Catalog = () => {
  return (
    <AnimatedPage>
      <>
        <main className="catalog-content">
          <div className="catalog-collection">
            <div className="catalog__banner">
              <img
                src="/assets/img/products/hero1.png"
                alt="hero1"
                className="main-content__banner-img"
              />
            </div>

            <div className="container">
              <div className="products-card-container__content">
                <ProductsCardList
                  title={"Бестселлеры"}
                  filterButton={true}
                  elements={[
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCardBig
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                  ]}
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
};

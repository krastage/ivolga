import "../../styles/global/settings.scss";
import "./Catalog.scss";
import { Footer } from "../../components/Footer/Footer";
import { ProductsCard } from "../../layouts/ProductsCard/ProductsCard";
import { ProductsCardList } from "../../layouts/ProductsCard/ProductsCardList";
import { AnimatedPage } from "../../components/AnimatedPage";

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

            <div className="products-card-container container">
              <div className="products-card-container__content">
                <ProductsCardList
                  title={"Бестселлеры"}
                  filterButton={true}
                  elements={[
                    <ProductsCard
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCard
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCard
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCard
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCard
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCard
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCard
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCard
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCard
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCard
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCard
                      link={"/catalog/product"}
                      title={"Топ черный из кашемира"}
                      price={25000}
                      imageSource={"/assets/img/products/product.png"}
                    />,
                    <ProductsCard
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

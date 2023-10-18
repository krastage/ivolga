import { ProfileLayout } from "../../layouts/ProfileLayout";
import { AnimatedPage } from "../../components/AnimatedPage";
import { ProductCard } from "../../layouts/ProductCard";
import { ProductsCardList } from "../../layouts/ProductsCardList";

export const Wishlist = () => {
  const content = (
    <AnimatedPage>
      <div className="wishlist-container">
        <ProductsCardList
          title={null}
          filterButton={true}
          children={[
            <ProductCard
              size="medium"
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductCard
              size="medium"
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductCard
              size="medium"
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductCard
              size="medium"
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductCard
              size="medium"
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductCard
              size="medium"
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductCard
              size="medium"
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductCard
              size="medium"
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
          ]}
        />
      </div>
    </AnimatedPage>
  );

  return <ProfileLayout content={content} />;
};

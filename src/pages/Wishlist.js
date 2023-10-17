import { ProfileLayout } from "../layouts/ProfileLayout";
import { AnimatedPage } from "../components/AnimatedPage";
import { ProductsCardMedium } from "../layouts/ProductsCardMedium";
import { ProductsCardList } from "../layouts/ProductsCardList";

export const Wishlist = () => {
  const content = (
    <AnimatedPage>
      <div className="wishlist-container">
        <ProductsCardList
          title={null}
          filterButton={true}
          elements={[
            <ProductsCardMedium
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductsCardMedium
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductsCardMedium
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductsCardMedium
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductsCardMedium
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductsCardMedium
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductsCardMedium
              link={"/catalog/product"}
              title={"Топ черный из кашемира"}
              price={25000}
              imageSource={"/assets/img/products/product.png"}
            />,
            <ProductsCardMedium
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

"use client";
import styles from "./productPage.module.scss";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import ProductCard from "@/components/store/common/productCard";
import { TopProducts } from "@/data/homepageData";

import { LikeIcon, MinusIcon } from "@/components/icons/svgIcons";
import Gallery from "@/components/store/productPage/gallery";
import ProductBoard from "@/components/store/productPage/productBoard";

import { SK_Box } from "@/components/UI/skeleton";
import { productDetail } from "@/data/products";
import Image from "next/image";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = useParams<{ productId: string[] }>();
  // const [productInfo, setProductInfo] = useState<
  //   TProductPageInfo | null | undefined
  // >(null);
  const [productInfo, setProductInfo] = useState<any | null | undefined>(null);
  if (!productId) router.push("/");

  useEffect(() => {
    const getProductFromDB = async () => {
      // const response = await getOneProduct(productId.toString());
      const response = { res: productDetail };
      // if (response.error) router.push("/");
      setProductInfo(response.res);
    };
    getProductFromDB();
  }, [productId, router]);

  if (productInfo === undefined) return "";
  let fullPath = "";

  const generatePath = (index: number) => {
    if (productInfo) {
      fullPath += "/" + productInfo.path[index].url;
      return (
        <Link key={index} href={"/list" + fullPath}>
          {productInfo.path[index].name}
        </Link>
      );
    }
    return <div></div>;
  };
  return (
    <div className="storeContainer">
      <div className={styles.productPage}>
        <div className={styles.upperSection}>
          <div className={styles.leftSection}>
            <div className={styles.path}>
              {productInfo ? (
                <React.Fragment>
                  <Link href={"/"}>Trang chủ</Link>
                  {productInfo.path.map((item, index) => generatePath(index))}
                </React.Fragment>
              ) : (
                <SK_Box width="60%" height="15px" />
              )}
            </div>
            <Gallery images={productInfo?.images} />
          </div>
          <div className={styles.rightSection}>
            {productInfo ? (
              <ProductBoard
                boardData={{
                  id: productInfo.id,
                  isAvailable: productInfo.isAvailable,
                  defaultQuantity: 1,
                  name: productInfo.name,
                  price: productInfo.price,
                  dealPrice: productInfo.salePrice || undefined,
                  shortDesc: productInfo.desc || "",
                  specialFeatures: productInfo.specialFeatures,
                }}
              />
            ) : (
              <div className={styles.boardLoading}>
                <SK_Box width="60%" height="14px" />
                <div className={styles.title}>
                 
                  <SK_Box width="90%" height="16px" />
                </div>
                <div className={styles.desc}>
                  <SK_Box width="40%" height="14px" />
                  <SK_Box width="40%" height="14px" />
                  <SK_Box width="40%" height="14px" />
                </div>
                <div className={styles.price}>
                  <SK_Box width="30%" height="40px" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.lowerSection}>
          <div className={styles.leftSection}>
            {/* ----------------- SPECIFICATION SECTION ----------------- */}
            <div className={styles.specification}>
              <h2>Thông tin kỹ thuật</h2>
              {productInfo ? (
                productInfo.specifications.map((spec, index) => (
                  <section key={index} className={styles.specGroup}>
                    <div className={styles.specGroupHead}>
                      <button>
                        <MinusIcon width={12} />
                        <MinusIcon width={12} />
                      </button>
                      <h3>{spec.groupName}</h3>
                    </div>
                    {spec.specs.map((row, index) => (
                      <div key={index} className={styles.row}>
                        <div className={styles.leftCol}>
                          <span>{row.name}</span>
                        </div>
                        <div className={styles.rightCol}>
                          <span key={index}>{row.value}</span>
                        </div>
                      </div>
                    ))}
                  </section>
                ))
              ) : (
                <>
                  <div className={styles.specLoading}>
                    <SK_Box width="200px" height="30px" />
                    <div className={styles.specs}>
                      <SK_Box width="10%" height="20px" />
                      <SK_Box width="40%" height="16px" />
                    </div>
                    <div className={styles.specs}>
                      <SK_Box width="10%" height="20px" />
                      <SK_Box width="40%" height="16px" />
                    </div>
                  </div>
                  <div className={styles.specLoading}>
                    <SK_Box width="200px" height="30px" />
                    <div className={styles.specs}>
                      <SK_Box width="10%" height="20px" />
                      <SK_Box width="40%" height="16px" />
                    </div>
                    <div className={styles.specs}>
                      <SK_Box width="10%" height="20px" />
                      <SK_Box width="40%" height="16px" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* ----------------- USER REVIEWS ----------------- */}
            <div className={styles.userReviews}>
              <div className={styles.header}>
                <h2>Người dùng đánh giá</h2>
                <button>Đánh giá mới</button>
              </div>
              <div className={styles.reviewWrapper}>
                <div className={styles.head}>
                  <div className={styles.user}>
                    <Image
                      src={"/images/images/defaultUser.png"}
                      alt=""
                      width={32}
                      height={32}
                    />
                    <span>Nguyễn Văn A</span>
                  </div>
                  <span className={styles.isVerified}>Verified Purchase</span>
                  <div className={styles.dateAndLikeSection}>
                    <div className={styles.date}>30 November 2023</div>
                    <div className={styles.likeInteraction}>
                      <button className={styles.like}>
                        <LikeIcon width={16} />0
                      </button>
                      <button className={styles.dislike}>
                        <LikeIcon width={16} /> 0
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.body}>
                  <span>
                    {`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Temporibus suscipit debitis reiciendis repellendus! Repellat rem beatae quo quis 
                    tenetur. Culpa quae ratione delectus id odit in nesciunt saepe pariatur vitae.`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.similarProductSection}>
          <h2>Sản phẩm tương tự</h2>
          <div className={styles.cardsContainer}>
            {TopProducts.map((product, index) => (
              <ProductCard
                key={index}
                imgUrl={product.imgUrl}
                name={product.name}
                price={product.price}
                specs={product.specs}
                url={product.url}
                dealPrice={product.dealPrice}
                staticWidth
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

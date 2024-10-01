import { Metadata } from "next";
import Link from "next/link";

import styles from "./page.module.scss";

import ProductCard from "@/components/store/common/productCard";
import HomeBlogCard from "@/components/store/home/blogCard";
import HomeCategoryList from "@/components/store/home/categories";
import CollectionCard from "@/components/store/home/collectionCard";
import HCompanyLogo from "@/components/store/home/companyLogo";
import HomeSlider from "@/components/store/home/slider";
import TodayDealCard from "@/components/store/home/todayDealCard";
import WideAd from "@/components/store/home/wideAd";
import {
  BlogCardData,
  CollectionsData,
  TodayDeals,
  TopProducts,
} from "@/data/homepageData";

export const metadata: Metadata = {
  title: "Laptop - Lap4ALL",
};

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className="storeContainer flexCol">
        <div className={styles.heroContainer}>
          <HomeCategoryList />
          <HomeSlider />
        </div>
        <div className={styles.wideAdContainer}>
          <WideAd
            imgUrl="/images/images/wideAd1.jpg"
            smallTitle="Smart Watches"
            title="Save Up to 99VNĐ"
            url="/list/watches"
          />
          <WideAd
            imgUrl="/images/images/wideAd2.jpg"
            smallTitle="Laptops"
            title="Save Up to 99VNĐ"
            url="/list/pc-laptops/laptops"
          />
          <WideAd
            imgUrl="/images/images/wideAd3.jpg"
            smallTitle="DJI Products"
            title="Save Up to 199VNĐ"
            url="/list/photography/drones"
          />
        </div>
        <div className={styles.homeSection}>
          <div className={styles.sectionHeader}>
            <h2>Giá tốt hôm nay</h2>
            <Link href={""}>Xem tất cả</Link>
          </div>
          <div className={styles.cardsWrapper}>
            {TodayDeals.map((deal, index) => (
              <TodayDealCard
                productName={deal.name}
                oldPrice={deal.price}
                newPrice={deal.dealPrice}
                image={deal.imgUrl}
                spec={deal.specs}
                dealEndTime={deal.dealDate}
                url={deal.url}
                key={index}
              />
            ))}
          </div>
        </div>
        {/* <div className={styles.wideAdContainer}>
          <WideAd
            imgUrl="/images/images/lensAd.jpg"
            smallTitle="Laptop AI"
            title="Sống chất cùng AI"
            url="/list/laptop"
          />
          <WideAd
            imgUrl="/images/images/djiAd.jpg"
            smallTitle="Laptop Sinh Viên"
            title="Tiết kiểm tới 99%"
            url="/list/laptop"
          />
        </div> */}
        <div className={styles.homeSection}>
          <div className={styles.sectionHeader}>
            <h2>Danh mục nổi bật</h2>
          </div>
          <div className={styles.cardsWrapper}>
            {CollectionsData.map((collection, index) => (
              <CollectionCard collection={collection} key={index} />
            ))}
          </div>
        </div>
        <div className={styles.homeSection}>
          <div className={styles.sectionHeader}>
            <h2>Top laptop bán chạy ❤️‍🔥</h2>
            <Link href={"/"}>Xem tất cả</Link>
          </div>
          <div className={styles.cardsWrapper}>
            {TopProducts.map((product, index) => (
              <ProductCard
                name={product.name}
                imgUrl={product.imgUrl}
                price={product.price}
                specs={product.specs}
                url={product.url}
                dealPrice={product.dealPrice}
                key={index}
                staticWidth
              />
            ))}
          </div>
        </div>
        <div className={styles.homeSection}>
          <div className={styles.sectionHeader}>
            <h2>Bài viết</h2>
          </div>
          <div className={styles.blogCardContainer}>
            {BlogCardData.map((blog, index) => (
              <HomeBlogCard
                key={index}
                imgUrl={blog.imgUrl}
                title={blog.title}
                shortText={blog.shortText}
                url={blog.url}
              />
            ))}
          </div>
        </div>
        <div className={styles.companiesSection}>
          <h2>Thương hiệu</h2>
          <div>
            <HCompanyLogo
              width={104}
              bgPositionX={0}
              url="/list/photography/scanners/epson"
            />
            <HCompanyLogo width={50} bgPositionX={-105} url="/" />
            <HCompanyLogo width={50} bgPositionX={-156} url="/" />
            <HCompanyLogo
              width={44}
              bgPositionX={-207}
              url="/list/smartphones/apple-iphone"
            />
            <HCompanyLogo
              width={47}
              bgPositionX={-252}
              url="/list/smartphones/xiaomi"
            />
            <HCompanyLogo width={54} bgPositionX={-300} url="/" />
            <HCompanyLogo width={55} bgPositionX={-355} url="/" />
            <HCompanyLogo
              width={98}
              bgPositionX={-411}
              url="/list/pc-laptops/laptops/asus"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

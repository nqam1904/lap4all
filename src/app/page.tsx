"use client";

import { Carosuel, Feature, HeaderPage, Section } from "@/components";
import { ECategories } from "@/constants/enum";
import { getEmoji, getNameCategory } from "@/utils";
import styles from "./page.module.scss";

function Home() {
  // const BannerHome = () => {
  //   return (
  //     <div className={styles.bannerContainer}>
  //       {bannerData.map((i: { id: number; url: string }, index: number) => {
  //         return <Banner key={index} url={i.url} alt="banner" />;
  //       })}
  //     </div>
  //   );
  // };

  return (
    <main className={styles.home}>
      <HeaderPage
        title={getNameCategory(ECategories.HOME)}
        icon={getEmoji(ECategories.HOME)}
        name={ECategories.HOME}
      />
      <Carosuel />
      {/* <BannerHome /> */}
      <Feature />
      <Section />
    </main>
  );
}
export default Home;

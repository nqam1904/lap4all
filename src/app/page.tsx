"use client";

import { Carousel, Feature, HeaderPage, Section } from "@/components";
import { carouselHome, productFeatureData } from "@/constants/dummy";
import { ECategories } from "@/constants/enum";
import { getEmoji, getNameCategory } from "@/utils";
import styles from "./page.module.scss";

function Home() {
  return (
    <main className={styles.home}>
      <HeaderPage
        title={getNameCategory(ECategories.HOME)}
        icon={getEmoji(ECategories.HOME)}
        name={ECategories.HOME}
      />
      <Carousel data={carouselHome} />

      <div className={styles.container_animated}>
        <div className={styles.text_animation}>
          <span>Tech for Today. Inspiration for Tomorrow.</span>
          <span>Tech for Today. Inspiration for Tomorrow.</span>
          <span>Tech for Today. Inspiration for Tomorrow.</span>
          <span>Tech for Today. Inspiration for Tomorrow.</span>
        </div>
      </div>

      <Feature
        title="New Arrivals"
        subTitle="A real-time roundup of the latest gadgets on our site."
        feature={productFeatureData}
      />
      <Feature
        title="Bestsellers"
        subTitle="All the current favourites from our community."
        feature={productFeatureData}
      />
      <Section />
    </main>
  );
}
export default Home;

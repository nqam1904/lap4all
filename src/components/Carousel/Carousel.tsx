"use client";

import { settingCarouselHome as setting } from "@/utils";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styles from "./carousel.module.scss";

type TCarousel = {
  data: any[];
};
const Carousel: React.FC<TCarousel> = ({ data = [] }) => {
  const renderImage = () => {
    return data.map((x, index) => (
      <Image
        key={index}
        src={x.url}
        alt="banner"
        priority
        width={500}
        height={500}
        className={styles.image_item}
        unoptimized
      />
    ));
  };
  return (
    <div className={styles.slider_container}>
      <Slider {...setting}>{renderImage()}</Slider>
    </div>
  );
};

export default Carousel;

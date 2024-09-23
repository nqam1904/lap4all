"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styles from "./carosuel.module.scss";

const data = [
  {
    id: Date.now(),
    url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: Date.now(),
    url: "https://plus.unsplash.com/premium_photo-1673548917645-e8d9ed21e2b2?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: Date.now(),
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: Date.now(),
    url: "https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Carosuel: React.FC = () => {
  const settings: any = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    waitForAnimate: false,
    fade: true,
    dots: true,
  };
  const renderImage = () => {
    return data.map((x) => (
      <Image
        key={x.id}
        src={x.url}
        alt="banner"
        width={500}
        height={500}
        className={styles.image_item}
        loading="eager"
        unoptimized
        objectFit="100vw"
      />
    ));
  };
  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>{renderImage()}</Slider>
    </div>
  );
};

export default Carosuel;

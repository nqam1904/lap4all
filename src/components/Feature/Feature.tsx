"use client";
import { productFeatureData } from "@/constants/dummy";
import { fakeApiCall } from "@/utils/Utils";
import React, { useEffect, useMemo, useState } from "react";
import Slider, { Settings } from "react-slick";
import VerticalCard from "../Card/vertical-card/VerticalCard";
import styles from "./feature.module.scss";

const Feature: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToScroll: 1,
    centerPadding: "60px",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchData = async () => {
    try {
      const response: any = await fakeApiCall(productFeatureData);
      setData(response);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  const renderItem = useMemo(() => {
    return data.map((product, index) => (
      <VerticalCard
        key={index}
        loading={loading}
        {...product}
        hoverable={false}
        bordered={true}
      />
    ));
  }, [loading, data]);

  useEffect(() => {
    fetchData();
  }, []);

  const renderItemLoading = () => {
    return new Array(4)
      .fill(null)
      .map((x, index) => (
        <VerticalCard key={index} loading={loading} preview={false} />
      ));
  };
  return (
    <div className={styles.container}>
      <h1>New Arrivals</h1>
      <span className={styles.description}>
        A real-time roundup of the latest gadgets on our site.
      </span>

      <div className={styles.product}>
        {!!renderItem.length ? (
          <Slider {...settings}>{renderItem}</Slider>
        ) : (
          renderItemLoading()
        )}
      </div>
    </div>
  );
};

export default Feature;

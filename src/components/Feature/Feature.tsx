/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { fakeApiCall } from "@/utils/Utils";
import React, { useEffect, useMemo, useState } from "react";
import Slider, { Settings } from "react-slick";
import VerticalCard from "../Card/vertical-card/VerticalCard";
import styles from "./feature.module.scss";
type TFeature = {
  title: string;
  subTitle?: string;
  feature: any[];
};
const Feature: React.FC<TFeature> = ({
  title,
  subTitle = "",
  feature = [],
}) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    slidesToScroll: 1,
    centerPadding: "160px",
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
      const response: any = await fakeApiCall(feature);
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
        hoverable
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
      <h1>{title}</h1>
      <span className={styles.description}>{subTitle}</span>

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

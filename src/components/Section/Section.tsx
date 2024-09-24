"use client";

import { Image } from "antd";
import React from "react";
import styles from "./section.module.scss";
const data = [
  {
    id: Date.now(),
    title: "Delivering Happiness",
    icon: "https://cdn-icons-png.flaticon.com/128/1585/1585176.png",
    content: "Over 900+ 5-star reviews.",
  },
  {
    id: Date.now(),
    title: "Free shipping",
    icon: "https://cdn-icons-png.flaticon.com/128/1585/1585176.png",
    content: "For all orders over $200.",
  },
  {
    id: Date.now(),
    title: "Official Warranty",
    icon: "https://cdn-icons-png.flaticon.com/128/1585/1585176.png",
    content: "For all products on Synced.sg",
  },
  {
    id: Date.now(),
    title: "Local Tech Support",
    icon: "https://cdn-icons-png.flaticon.com/128/1585/1585176.png",
    content: "For all products on Synced.sg",
  },
];
const Section: React.FC = () => {
  const renderOptions = () => {
    return data.map((i, index) => {
      return (
        <div key={index} className={styles.content_options_item}>
          <Image
            width={32}
            height={32}
            src={i.icon}
            alt="icon"
            preview={false}
          />
          <p className={styles.content_options_title}>{i.title}</p>
          <span className={styles.content_options_sub_title}>{i.content}</span>
        </div>
      );
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.content_title}>
          Connecting you to the world greatest innovations.
        </h1>
        <div className={styles.content_options}>{renderOptions()}</div>
      </div>
    </div>
  );
};

export default Section;

"use client";

import React from "react";
import styles from "./group.module.scss";
export default function Products({
  reverse,
  children,
}: {
  reverse?: boolean;
  children: React.ReactNode[];
}): JSX.Element {
  if (children.length > 4) return <></>;

  return (
    <div
      className={styles.container}
      style={{ direction: reverse ? "rtl" : undefined }}
    >
      <div style={{ gridArea: "first" }}>{children[0]}</div>
      <div style={{ gridArea: "second" }}>{children[1]}</div>
      <div style={{ gridArea: "third" }}>{children[2]}</div>
      <div style={{ gridArea: "fourth" }}>{children[3]}</div>
    </div>
  );
}

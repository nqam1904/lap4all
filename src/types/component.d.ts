import { ReactNode } from "react";

export interface ItemCategories {
  name: string;
  link: string;
  emoji: string;
}
export interface IGroupProduct {
  reverse?: boolean;
  children: ReactNode;
}

export interface IBanner {
  url: string;
  alt?: string;
}

export interface IVerticalCard {
  loading: boolean;
  name?: string;
  thumbnail?: string;
  shortDescription?: string;
  alt?: stirng;
  price?: number;
  preview?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
}

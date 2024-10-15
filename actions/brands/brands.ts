"use server";
import { db } from "@/lib/db";
import { TBrand } from "@/types/product";
import { z } from "zod";

const ValidateUpdateBrand = z.object({
  id: z.string().min(6),
  name: z.string().min(3),
  image: z.string().min(3),
});

export const addBrand = async (brandName: string, image: string) => {
  if (!brandName || brandName === "" || image === "")
    return { error: "Invalid Data!" };

  try {
    const result = db.brand.create({
      data: {
        name: brandName,
        image,
      },
    });
    if (!result) return { error: "Can't Insert Data" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const getAllBrands = async () => {
  try {
    const result: TBrand[] | null = await db.brand.findMany();

    if (!result) return { error: "Can't Get Data from Database!" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const deleteBrand = async (brandID: string) => {
  if (!brandID || brandID === "") return { error: "Invalid Data!" };
  try {
    const result = await db.brand.delete({
      where: {
        id: brandID,
      },
    });

    if (!result) return { error: "Can't Delete!" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const updateBrand = async (data: TBrand) => {
  if (!ValidateUpdateBrand.safeParse(data).success)
    return { error: "Invalid Data!" };

  try {
    const result = await db.brand.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        image: data.image
      },
    });

    if (!result) return { error: "Can't Delete!" };
    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

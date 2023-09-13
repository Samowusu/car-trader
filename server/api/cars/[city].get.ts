import { defineEventHandler, getQuery } from "h3";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler((event: any) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event);

  const filters: {
    city: string;
    make?: string | any;
    price?: { gte?: number; lte?: number };
  } = {
    city: city.toLowerCase(),
  };

  if (make) {
    filters.make = make;
  }

  if (minPrice || maxPrice) {
    filters.price = {};
  }

  if (minPrice) {
    filters.price = { gte: parseInt(minPrice as string) };
  }

  if (maxPrice) {
    filters.price = { lte: parseInt(maxPrice as string) };
  }
  return prisma.car.findMany({
    where: filters,
  });
});

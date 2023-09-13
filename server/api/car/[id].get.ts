import cars from "@/data/cars.json";
import { defineEventHandler } from "h3";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
  const { id } = event.context.params;

  const foundCar = await prisma.car.findUnique({
    where: {
      id,
    },
  });
  if (!foundCar) {
    throw createError({
      statusCode: 404,
      statusMessage: `Car with ID of ${id} does not exist.`,
    });
  }
  return foundCar;
});

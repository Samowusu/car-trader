import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listingSchema = z.object({
  make: z.string(),
  model: z.string(),
  year: z
    .number()
    .min(1886)
    .max(new Date().getFullYear() + 1),
  miles: z.number().min(0),
  city: z.string().nonempty().min(2),
  numberOfSeats: z.number().max(1000).min(1),
  features: z.array(z.string()),
  image: z.string(),
  listerId: z.string(),
  price: z.number().min(0),
  name: z.string(),
  description: z.string(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const parsedData = listingSchema.parse(body);
  const {
    make,
    model,
    miles,
    city,
    numberOfSeats,
    features,
    image,
    listerId,
    price,
    name,
    description,
    year,
  } = parsedData;

  const car = await prisma.car.create({
    data: {
      make,
      model,
      miles,
      city,
      numberOfSeats,
      features,
      image,
      listerId,
      price,
      name,
      description,
      year,
    },
  });

  return car;
});

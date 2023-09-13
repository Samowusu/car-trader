import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const messageSchema = z.object({
  email: z.string().email(),
  phone: z
    .string()
    .length(10)
    .regex(/^[0-9]+$/),
  name: z.string(),
  message: z.string().min(20),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { listingId } = event.context.params;

  const { message, email, phone, name } = messageSchema.parse(body);
  return await prisma.message.create({
    data: {
      message,
      email,
      phone,
      name,
      listingId,
    },
  });
});

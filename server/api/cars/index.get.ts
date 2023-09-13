import cars from "@/data/cars.json";
import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  return cars;
});

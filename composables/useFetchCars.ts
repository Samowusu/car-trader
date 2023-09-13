export default async (city: string, filters: {}) => {
  const { data, error, refresh } = await useFetch(`/api/cars/${city}`, {
    params: { ...filters },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unabale to fetch",
    });
  }

  return { data, refresh };
};

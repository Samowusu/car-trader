export const useUtilities = () => {
  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const inputs = [
    { id: 1, title: "Model *", name: "model", placeholder: "Civic" },
    { id: 2, title: "Year *", name: "year", placeholder: "2019" },
    { id: 3, title: "Miles *", name: "miles", placeholder: "10000" },
    { id: 4, title: "City *", name: "city", placeholder: "Austin" },
    { id: 5, title: "Number of Seats *", name: "seats ", placeholder: "5" },
    {
      id: 6,
      title: "Features *",
      name: "features ",
      placeholder: "Leather Interior, No Accidents",
    },
  ];

  return {
    toTitleCase,
    inputs,
  };
};

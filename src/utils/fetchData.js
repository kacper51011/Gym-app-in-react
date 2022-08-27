export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const fetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c3344380a4msh79f85e3d9d6bf87p198f8fjsn549c3a88ee8c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

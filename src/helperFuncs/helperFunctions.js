export const addNewProp = (arr) => {
  const newArr = arr.map((movie) => {
    return {
      ...movie,
      joined: false,
    };
  });
  return newArr;
};

export const fetchDoggo = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  return res.json()
};

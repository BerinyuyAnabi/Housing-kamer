const addDataTo = (price, location, category, type, house_Image) => {
  const data = new FormData();
  data.append("price", price);
  data.append("location", location);
  data.append("category", category);
  data.append("type", type);
  data.append("house_image", house_Image);
  console.log(price, location, category);
};
export { addDataTo };

const getSortedProducts = (products, sort) => {
  if (sort === "Hight-to-low") {
    return [...products].sort(
      (itemOne, itemTwo) => itemTwo["price"] - itemOne["price"]
    );
  }
  if (sort === "Low-to-high") {
    return [...products].sort(
      (itemOne, itemTwo) => itemOne["price"] - itemTwo["price"]
    );
   
  }
  return products;
};
const categoryFilter = (products, categories) => {
  const filterCategories = [];

  if (Object.values(categories).every((value) => !value)) {
    return products;
  } else {
    for (const key in categories) {
      if (categories[key]) {
        let newCategories = products.filter(
          (item) => key === item.categoryName
        );
        filterCategories.push(...newCategories);
      }
    }
  }
  return filterCategories;
};

const brandFilter = (products, brands) => {
  const filteredBrands = [];

  if (Object.values(brands).every((value) => !value)) {
    return products;
  } else {
    for (const key in brands) {
      if (brands[key]) {
        let newBrands = products.filter((item) => key === item.brandName);
        filteredBrands.push(...newBrands);
      }
    }
  }
  return filteredBrands;
};
const priceRangeSorter = (products, price) => {
  return products.filter((item) => item.price <= price);
};

export { getSortedProducts, priceRangeSorter, categoryFilter, brandFilter };

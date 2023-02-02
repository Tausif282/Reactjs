export function filterData(searchText, allRestaurant) {
  const filterData = allRestaurant.filter((restaur) => {
    return restaur.data?.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return filterData;
}

import { FETCH_MENU_DETAIL } from "../constant";
import { useEffect, useState } from "react";

const useRestaurant = (resId) => {
  const [menuDetail, setMenuDetail] = useState({});

  useEffect(() => {
    getMenuDetail();
  }, []);

  async function getMenuDetail() {
    const data = await fetch(`${FETCH_MENU_DETAIL} ${resId}`);
    const json = await data.json();
    setMenuDetail(json.data);
  }

  return menuDetail;
};

export default useRestaurant;

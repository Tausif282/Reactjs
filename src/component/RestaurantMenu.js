import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer.js";
import useRestaurant from "./../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();

  const menuDetail = useRestaurant(id);

  const { name, cloudinaryImageId, locality } = menuDetail;
  return !menuDetail?.menu?.items ? (
    <Shimmer />
  ) : (
    <div className="menu-detail">
      <div>
        Restaurant Menu : {id}
        <h2>{name}</h2>
        <img src={IMG_CDN_URL + cloudinaryImageId} className="menuImage" />
        <h4>{locality}</h4>
      </div>
      <div>
        <h2>Menu</h2>
        <div>
          <ul>
            {menuDetail?.menu?.items &&
              Object.values(menuDetail?.menu?.items).map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

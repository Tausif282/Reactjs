import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  //   const { cloudinaryImageId, name, cuisines, avgRating } = restrauList.data;

  return (
    <div className="card">
      <img alt="dis" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};
export default RestaurantCard;

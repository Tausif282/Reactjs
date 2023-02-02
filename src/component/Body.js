import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "./../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [fliterRestaurant, setFilterRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1> offline Pls check Internet connection</h1>;
  }

  if (!allRestaurant) return null;
  if (fliterRestaurant?.length == 0 && allRestaurant?.length !== 0)
    return <h1>No Restaurant Match Your Filter !</h1>;

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <React.Fragment>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search.."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {fliterRestaurant.map((restaurant) => {
          return (
            <Link
              to={`/restaurant/${restaurant.data.id}`}
              key={restaurant.data.id}
            >
              {" "}
              <RestaurantCard {...restaurant.data} />{" "}
            </Link>
          );
        })}
      </div>
    </React.Fragment>
    /** <RestaurantCard {...restrauList[0].data} />
          <RestaurantCard {...restrauList[1].data} />
          <RestaurantCard {...restrauList[2].data} />
          <RestaurantCard {...restrauList[3].data} />
          <RestaurantCard {...restrauList[4].data} />
          <RestaurantCard {...restrauList[5].data} />*/
    /**  <RestaurantCard restrauList={restrauList[2]} />
        <RestaurantCard restrauList={restrauList[3]} />
        <RestaurantCard restrauList={restrauList[4]} />
        <RestaurantCard restrauList={restrauList[5]} /> */
  );
};

export default Body;

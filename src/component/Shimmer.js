const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return <div className="card-shimmer" key={index}></div>;
        })}
    </div>
  );
};

export default Shimmer;

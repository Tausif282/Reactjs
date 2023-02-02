import { useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is Profile Page Name: {props.name}</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increse</button>
    </div>
  );
};

export default Profile;

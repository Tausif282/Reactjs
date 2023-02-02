import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.log(error);
  return (
    <div>
      {" "}
      <h1>Oops !</h1>
      <h2>
        {error.status}:{error.statusText}
      </h2>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Error;

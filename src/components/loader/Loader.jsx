
import { ClipLoader } from "react-spinners";
import "./loader.css";

const Loader = () => {
  
  return (
    <div className="loader">
      <ClipLoader color="#999999" cssOverride={{}} size={60} />
    </div>
  );
};

export default Loader;

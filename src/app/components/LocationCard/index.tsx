import { locationT } from "@/app/types/MyTypes";
import "./styles.css";

const LocationCard = ({ location }: { location: locationT }) => {
  return (
    <div className="card">
      <h2>{location.name}</h2>
      <div className="cardInfo">
        <p>{location.type}</p>
        <p>{location.dimension}</p>
      </div>
    </div>
  );
};

export default LocationCard;

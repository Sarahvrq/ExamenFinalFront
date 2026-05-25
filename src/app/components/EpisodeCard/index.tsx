import { episodeT } from "@/app/types/MyTypes";
import "./styles.css";

const EpisodeCard = ({ episode }: { episode: episodeT }) => {
  return (
    <div className="card">
      <h2>{episode.name}</h2>
      <div className="cardInfo">
        <p>{episode.episode}</p>
        <p>{episode.air_date}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;

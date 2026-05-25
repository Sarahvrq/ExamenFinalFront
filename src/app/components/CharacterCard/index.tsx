"use client";
import { characterT } from "@/app/types/MyTypes";
import { useRouter } from "next/navigation";
import "./styles.css";

const CharacterCard = ({ character }: { character: characterT }) => {
  const router = useRouter();

  return (
    <div
      className="card"
      onClick={() => router.push(`/characters/${character.id}`)}
    >
      <img src={character.image} className="cardImage" />
      <h2>{character.name}</h2>
      <p>{character.status}</p>
      <p>{character.gender}</p>
    </div>
  );
};

export default CharacterCard;

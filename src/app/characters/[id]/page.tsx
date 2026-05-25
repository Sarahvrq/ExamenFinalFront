"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { characterT } from "@/app/types/MyTypes";
import api from "@/api/api";
import "./styles.css";

const CharacterDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [character, setCharacter] = useState<characterT | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get(`/character/${id}`).then((res) => {
      setCharacter(res.data);
    }).catch((e) => {
      setError(String(e));
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!character) return null;

  return (
    <div className="detailContainer">
      <button className="backButton" onClick={() => router.back()}>
        ← Back
      </button>
      <div className="detailCard">
        <img src={character.image} className="detailImage" />
        <div className="detailInfo">
          <h1>{character.name}</h1>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>ID:</strong> {character.id}</p>
          <p><strong>Origin:</strong> {character.origin.name}</p>
          <p><strong>Location:</strong> {character.location.name}</p>
          {character.type && <p><strong>Type:</strong> {character.type}</p>}
          <p><strong>Episodes:</strong> {character.episode.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;

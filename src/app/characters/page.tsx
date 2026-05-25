"use client";
import "./styles.css";
import { useEffect, useState } from "react";
import { ApiResultCharactersT, characterT } from "../types/MyTypes";
import api from "@/api/api";
import CharacterCard from "../components/CharacterCard";
import Paginador from "../components/Paginador";

const CharactersPage = () => {
  const [searchFiltro, setSearchFiltro] = useState("");
  const [characters, setCharacters] = useState<characterT[]>([]);
  const [resultCharacters, setResultCharacters] =
    useState<ApiResultCharactersT | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [sortAZ, setSortAZ] = useState(false);
  const [sortGenero, setSortGenero] = useState("");
  const [sortEstado, setSortEstado] = useState("");

  useEffect(() => {
    api
      .get(`/character?page=${page}`)
      .then((e) => {
        const { data }: { data: ApiResultCharactersT } = e;
        setResultCharacters(data);
        setCharacters(data.results);
      })
      .catch((e) => {
        setError(String(e));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  let displayed = characters.filter((c) =>
    c.name.toLowerCase().includes(searchFiltro.toLowerCase()),
  );

  //same as parcial practice, DONT CHANGE FOR ANYTHING
  if (sortAZ) {
    displayed = [...displayed].sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortGenero) {
    displayed = displayed.filter((c) => c.gender === sortGenero);
  }

  if (sortEstado) {
    displayed = displayed.filter((c) => c.status === sortEstado);
  }

  return (
    <div>
      <div className="CharactersControls">
        <input
          className="SearchBar"
          type="text"
          placeholder="Buscar Personajes..."
          value={searchFiltro}
          onChange={(e) => setSearchFiltro(e.target.value)}
        />
        <button
          className={`SortButton ${sortAZ ? "active" : ""}`}
          onClick={() => setSortAZ(!sortAZ)}
        >
          A-Z
        </button>
        <button
          className={`SortButton ${sortEstado ? "active" : ""}`}
          onClick={() => setSortEstado(sortEstado ? "" : "Alive")}
        >
          Estado
        </button>
        <button
          className={`SortButton ${sortGenero ? "active" : ""}`}
          onClick={() => setSortGenero(sortGenero ? "" : "Female")}
        >
          Genero
        </button>
      </div>
      <div className="ContainerCharacters">
        {displayed.length === 0 && !loading && searchFiltro && (
          <p className="statusMessage">
            No se encontró ningún personaje con ese nombre;
          </p>
        )}
        {displayed.map((e) => (
          <CharacterCard key={e.id} character={e} />
        ))}
      </div>
      {loading && <p className="statusMessage">Loading...</p>}
      {error && <p className="statusMessage">{error}</p>}
      <Paginador
        next={!!resultCharacters?.info.next}
        prev={!!resultCharacters?.info.prev}
        page={page}
        setPage={(e) => {
          setPage(e);
        }}
      />
    </div>
  );
};

export default CharactersPage;

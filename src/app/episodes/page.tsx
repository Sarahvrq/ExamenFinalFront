"use client";
import "./styles.css";
import { useEffect, useState } from "react";
import { ApiResultEpisodesT } from "../types/MyTypes";
import api from "@/api/api";
import EpisodeCard from "../components/EpisodeCard";
import Paginador from "../components/Paginador";

const EpisodePage = () => {

    const [resultEpisode, setResultEpisode] = useState<ApiResultEpisodesT | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);

    const fetchEpisode = () => {
        api.get(`/episode?page=${page}`).then((e) => {
            const { data }: { data: ApiResultEpisodesT } = e;
            setResultEpisode(data);
        }).catch((e) => {
            setError(String(e));
        }).finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchEpisode();
    }, [page]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <div className="ContainerEpisode">
            {resultEpisode && resultEpisode.results.map((e) => (
                <EpisodeCard key={e.id} episode={e} />
            ))}
            <Paginador
                next={!!resultEpisode?.info.next}
                prev={!!resultEpisode?.info.prev}
                page={page}
                setPage={(e) => { setPage(e); }}
            />
        </div>
    );
};

export default EpisodePage;

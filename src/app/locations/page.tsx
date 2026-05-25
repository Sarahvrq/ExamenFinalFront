"use client";
import "./styles.css";
import { useEffect, useState } from "react";
import { ApiResultLocationsT } from "../types/MyTypes";
import api from "@/api/api";
import LocationCard from "../components/LocationCard";
import Paginador from "../components/Paginador";

const LocationsPage = () => {

    const [resultLocations, setResultLocations] = useState<ApiResultLocationsT | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);

    const fetchLocations = () => {
        api.get(`/location?page=${page}`).then((e) => {
            const { data }: { data: ApiResultLocationsT } = e;
            setResultLocations(data);
        }).catch((e) => {
            setError(String(e));
        }).finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchLocations();
    }, [page]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <div className="ContainerLocations">
            {resultLocations && resultLocations.results.map((e) => (
                <LocationCard key={e.id} location={e} />
            ))}
            <Paginador
                next={!!resultLocations?.info.next}
                prev={!!resultLocations?.info.prev}
                page={page}
                setPage={(e) => { setPage(e); }}
            />
        </div>
    );
};

export default LocationsPage;

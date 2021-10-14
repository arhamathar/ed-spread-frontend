import React, { useState, useEffect } from "react";
import BootcampCard from "./Cards/bootcampCard";

import useHttp from "../hooks/useHttp";

const Bootcamps = () => {
    const { sendRequest } = useHttp();

    const [bootcamps, setBootcamps] = useState([]);

    const getAllBootcamps = async () => {
        try {
            const resp = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_DEV}/api/course/bootcamps`,
                "GET",
                null,
                "/"
            );
            setBootcamps(resp.bootcamps);
        } catch (e) {}
    };

    useEffect(() => {
        getAllBootcamps();
    }, []);

    return (
        <div>
            <div className="courseh1">
                <h1 className="inline-block">Bootcamps</h1>
            </div>
            <div>
                <BootcampCard />
                {bootcamps.map((bootcamp) => {
                    return <BootcampCard key={"fd"} />;
                })}
            </div>
        </div>
    );
};

export default Bootcamps;

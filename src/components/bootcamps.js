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
    // console.log({ bootcamps });
    return (
        <div>
            <div className="courseh1">
                <h1 className="inline-block">Bootcamps</h1>
            </div>
            <div>
                {bootcamps.length > 0 &&
                    bootcamps.map((bootcamp) => (
                        <BootcampCard key={bootcamp._id} bootcamp={bootcamp} />
                    ))}
            </div>
        </div>
    );
};

export default Bootcamps;

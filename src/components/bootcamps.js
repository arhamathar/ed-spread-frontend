import React, { useState, useEffect, useCallback } from 'react';
import BootcampCard from './Cards/bootcampCard';

import useHttp from '../hooks/useHttp';

const Bootcamps = () => {
    const { sendRequest } = useHttp();

    const [bootcamps, setBootcamps] = useState([]);

    const reload = () => {
        getAllBootcamps();
    };

    const getAllBootcamps = useCallback(async () => {
        try {
            const resp = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_PROD}/api/course/bootcamps`,
                'GET',
                null,
                '/'
            );
            setBootcamps(resp.bootcamps);
        } catch (e) {}
    }, [sendRequest]);

    useEffect(() => {
        getAllBootcamps();
    }, [getAllBootcamps]);

    return (
        <div className='bootcamps'>
            <div className='courseh1'>
                <h1 className='inline-block'>Bootcamps</h1>
            </div>
            <div>
                {bootcamps.length > 0 &&
                    bootcamps.map((bootcamp) => (
                    <BootcampCard
                        key={bootcamp._id}
                        bootcamp={bootcamp}
                        reload={reload}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bootcamps;

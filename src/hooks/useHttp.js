import { useState, useCallback } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const useHttp = () => {
    const history = useHistory();

    const [loading, setLoading] = useState(true);

    const sendRequest = useCallback(
        async (
            url,
            method = "GET",
            postData = null,
            redirectUrl = "/",
            headers = { "Content-Type": "application/json" }
        ) => {
            setLoading(true);
            try {
                const { data } = await axios({
                    url,
                    method,
                    data: postData,
                    headers,
                });
                console.log(data);

                setLoading(false);
                if (data.message) toast.success(`${data.message}`);
                history.push(redirectUrl);
                return data;
            } catch (err) {
                console.log(err.response);
                toast.error(`${err.response.data.message}`);
                setLoading(false);
            }
        },
        [history]
    );

    return { loading, sendRequest };
};

export default useHttp;

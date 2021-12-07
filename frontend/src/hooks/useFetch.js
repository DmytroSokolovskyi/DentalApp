import {useEffect, useState} from "react";

export const useFetch = (callback) => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(undefined);
    const [res, setRes] = useState({});

    const goFetch = async () => {
        try {
            setLoading(true);
            const response = await callback;
            setRes(response);
            setData(response.data);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        goFetch();
    }, []);

    return {
        error,
        loading,
        data,
        res,
    };
};

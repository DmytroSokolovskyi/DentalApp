import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

export const useFetch = (callback, toRedux) => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [res, setRes] = useState({});
    const dispatch = useDispatch();

    const goFetch = async () => {
        try {
            setLoading(true);

            const response = toRedux ? await dispatch(callback()) : await callback;

            setRes(response);
            setData(response.data);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    const setFetch = async (callback, toRedux) => {
        try {
            setLoading(true);

            const response = toRedux ? await dispatch(callback) : await callback;
            console.log(response);
            setRes(response);
            setData(response.data);
        } catch (e) {
            console.log("popal", e.message);
            setError(e.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        goFetch();
    }, [callback]);

    return {
        error,
        loading,
        data,
        res,
        setData,
        goFetch,
        setFetch,
    };
};

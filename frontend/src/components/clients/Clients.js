import {
    deleteClientById,
    getClientsAll,
    saveClient,
    saveEditClient,
} from "../../services/doctor.service";
import {useCallback, useEffect, useState} from "react";
import Client from "../client/Client";
import ClientForm from "../clientForm/ClientForm";
import MyLoader from "../UI/myLoader/MyLoader";
import cl from "./Clients.module.scss";
import {useFetch} from "../../hooks";
import {useSelector} from "react-redux";

export default function Clients () {
    const [chosenClient, setChosenClient] = useState({});
    const {loading, setFetch, goFetch} = useFetch();
    const clients = useSelector(state => state.mainReducer.clients);

    useEffect(() => {
        if (!clients.length) {
            goFetch(getClientsAll(), true);
        }
    }, []);

    // todo зробити пошук i фiльтрацiю

    const clickCreate = useCallback((client) => {
        setFetch(saveClient(client), true);
    }, [],
    );

    const clickEdit = useCallback((client) => {
        setChosenClient(client);
    }, [],
    );

    const clickUpdate = useCallback((id, client) => {
        setFetch(saveEditClient(id, client), true);
    }, [],
    );

    const clickDelete = useCallback((id) => {
        setFetch(deleteClientById(id), true);
    }, [],
    );

    if (loading) {
        return <MyLoader/>;
    }

    return (
        <div className={cl.clientsDiv}>
            <div className={cl._container}>
                <div className={cl.clientsContent}>
                    <div className={cl.clientsList}>
                        <div className={cl.clientsNav}>
                            <span>Фамiлiя</span>
                            <span>Iмя</span>
                            <span>Телефон</span>
                            <span>Email</span>
                            <span> </span>
                        </div>
                        {
                            clients.map(item => <Client clickEdit={clickEdit} clickDelete={clickDelete} client={item} key={item.id}/>)
                        }
                    </div>
                    <div className={cl.clientsForm}>
                        <ClientForm clickCreate={clickCreate} clickUpdate={clickUpdate} chosenClient={chosenClient} />
                    </div>
                </div>
            </div>
        </div>
    );
}

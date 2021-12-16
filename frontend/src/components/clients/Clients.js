import {deleteClient, getClients, saveEditClient, setClient} from "../../services/doctor.service";
import {useEffect, useState} from "react";
import Client from "../client/Client";
import ClientForm from "../clientForm/ClientForm";
import MyLoader from "../UI/myLoader/MyLoader";
import cl from "./Clients.module.scss";
import {useFetch} from "../../hooks";
import {useSelector} from "react-redux";

export default function Clients () {
    const [clientsAll, setClientAll] = useState([]);
    const [chosenClient, setChosenClient] = useState({});
    const {loading, setFetch, error} = useFetch(getClients, true);
    const {clients} = useSelector(state => state.mainReducer);

    useEffect(() => {
        setClientAll(clients);
    }, [clients]);

    // todo зробити пошук i фiльтрацiю

    const clickCreate = (client) => {
        setFetch(setClient(client), true);
    };

    const clickEdit = (client) => {
        setChosenClient(client);
    };

    const clickUpdate = (id, client) => {
        console.log(client);
        setFetch(saveEditClient(id, client), true);
    };

    const clickDelete = (id) => {
        setFetch(deleteClient(id), true);
    };

    if (loading) {
        return <MyLoader/>;
    }

    return (
        <div className={cl.clientsDiv}>
            <div className={cl._container}>
                <div className={cl.clientsContent}>
                    <div className={cl.clientsList}>
                        <div className={cl.clientsNav}>
                            <span>Iмя</span>
                            <span>Фамiлiя</span>
                            <span>Телефон</span>
                            <span>Email</span>
                            <span> </span>
                        </div>
                        {
                            clientsAll.map(item => <Client clickEdit={clickEdit} clickDelete={clickDelete} client={item} key={item.id}/>)
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

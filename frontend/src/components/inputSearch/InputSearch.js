import {memo, useEffect, useState} from "react";
import cl from "./InputSearch.module.scss";
import {getClients} from "../../services/doctor.service";
import {useDebounce} from "../../hooks/useDebounce";
import {useSelector} from "react-redux";

export default memo(function InputSearch ({client, selectClient}) {
    const [inputSearch, setInputSearch] = useState("");
    const [clientsArray, setClientsArray] = useState([]);
    const {clients} = useSelector(state => state.mainReducer);

    const choseClient = (client) => {
        setInputSearch(`${client.surname} ${client.name}`);
        selectClient(client);
        setClientsArray([]);
    };

    useEffect(() => {
        if (client.name) {
            choseClient(client);
        } else if (clients.length) { setClientsArray(clients); }
    }, [clients, client]);

    const getClientsDebounce = useDebounce(async (value) => {
        const clientRes = await getClients(value);
        if (clientRes.data) {
            setClientsArray(clientRes.data);
        }
    }, 500);

    const inputChange = (e) => {
        const value = e.target.value;
        setInputSearch(value);
        if (value !== "") {
            getClientsDebounce(value);
        }
    };

    return (
        <div className={cl.searchInputDiv}>
            <input
                name={"massage"}
                value={inputSearch}
                placeholder={"Введiть даннi пацiента"}
                onChange={inputChange}
                type="text"
                autoComplete="off"
            />
            <div>
                <div className={cl.searchResultDiv}>
                    {
                        inputSearch !== "" &&
                        clientsArray.map(client =>
                            <div className={cl.clientInfo} key={client._id} onClick={() => {
                                setClientsArray([]);
                                choseClient(client);
                            }}>
                                <span>{client.surname} </span>
                                <span>{client.name}</span>
                            </div>,
                        )
                    }
                </div>
            </div>
        </div>
    );
},
);
